'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import api from '@/lib/api';

export default function SellerDashboardPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalTools: 0,
    pendingTools: 0,
    approvedTools: 0,
    rejectedTools: 0,
    paidTools: 0,
    freeTools: 0,
    totalValue: 0,
    averagePrice: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get('/submissions/my-submissions');
      const data = response.data;
      setSubmissions(data);
      
      const paidSubmissions = data.filter((s: any) => s.isPaid);
      const totalValue = paidSubmissions.reduce((sum: number, s: any) => sum + (s.price || 0), 0);
      const averagePrice = paidSubmissions.length > 0 ? totalValue / paidSubmissions.length : 0;
      
      setStats({
        totalTools: data.length,
        pendingTools: data.filter((s: any) => s.status === 'pending').length,
        approvedTools: data.filter((s: any) => s.status === 'approved').length,
        rejectedTools: data.filter((s: any) => s.status === 'rejected').length,
        paidTools: paidSubmissions.length,
        freeTools: data.filter((s: any) => !s.isPaid).length,
        totalValue,
        averagePrice,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate category distribution
  const categoryDistribution = submissions.reduce((acc: any, submission: any) => {
    const categoryName = submission.category?.name || 'Uncategorized';
    acc[categoryName] = (acc[categoryName] || 0) + 1;
    return acc;
  }, {});

  // Get recent submissions (last 5)
  const recentSubmissions = submissions
    .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  // Calculate submission trend (last 7 days)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split('T')[0];
  });

  const submissionTrend = last7Days.map(date => {
    const count = submissions.filter((s: any) => {
      const submissionDate = new Date(s.createdAt).toISOString().split('T')[0];
      return submissionDate === date;
    }).length;
    return { date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), count };
  });

  const overviewData = [
    { title: "Total Tools", value: stats.totalTools.toString(), icon: "Component", description: "Tools submitted", color: "text-blue-600", bgColor: "bg-blue-50" },
    { title: "Pending Review", value: stats.pendingTools.toString(), icon: "Eye", description: "Awaiting approval", color: "text-yellow-600", bgColor: "bg-yellow-50" },
    { title: "Approved", value: stats.approvedTools.toString(), icon: "CheckCircle", description: "Live tools", color: "text-green-600", bgColor: "bg-green-50" },
    { title: "Rejected", value: stats.rejectedTools.toString(), icon: "X", description: "Need revision", color: "text-red-600", bgColor: "bg-red-50" },
  ];

  const additionalStats = [
    { title: "Paid Tools", value: stats.paidTools.toString(), icon: "DollarSign", description: "Tools with pricing", color: "text-purple-600", bgColor: "bg-purple-50" },
    { title: "Free Tools", value: stats.freeTools.toString(), icon: "Star", description: "Free submissions", color: "text-indigo-600", bgColor: "bg-indigo-50" },
    { title: "Total Value", value: `$${stats.totalValue.toFixed(2)}`, icon: "Wallet", description: "Combined price", color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Avg. Price", value: stats.averagePrice > 0 ? `$${stats.averagePrice.toFixed(2)}` : "N/A", icon: "BarChart", description: "Per paid tool", color: "text-cyan-600", bgColor: "bg-cyan-50" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Seller Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Manage your tool submissions</p>
        </div>
        <Link href="/seller/dashboard/submit-tool">
          <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
            <Icons.Upload className="mr-2 h-4 w-4" />
            Submit New Tool
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewData.map(item => {
            const Icon = Icons[item.icon as keyof typeof Icons];
            return (
                <Card key={item.title} className="bg-card border-2 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
                        <div className={`p-2 rounded-lg ${item.bgColor || 'bg-primary/10'} ${item.color || 'text-primary'}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-3xl font-bold ${item.color || 'text-primary'} mb-1`}>
                          {loading ? '...' : item.value}
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {additionalStats.map(item => {
            const Icon = Icons[item.icon as keyof typeof Icons];
            return (
                <Card key={item.title} className="bg-card border-2 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
                        <div className={`p-2 rounded-lg ${item.bgColor || 'bg-primary/10'} ${item.color || 'text-primary'}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-3xl font-bold ${item.color || 'text-primary'} mb-1`}>
                          {loading ? '...' : item.value}
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Submissions */}
        <Card className="border-2 border-border/50">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
            <CardTitle className="text-xl">Recent Submissions</CardTitle>
            <CardDescription>Your latest tool submissions</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              </div>
            ) : recentSubmissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Icons.Component className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No submissions yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentSubmissions.map((submission: any) => (
                  <div key={submission._id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{submission.toolName}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(submission.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {submission.isPaid && (
                        <span className="text-sm font-semibold text-green-600">
                          ${submission.price?.toFixed(2)}
                        </span>
                      )}
                      <Badge 
                        variant="outline" 
                        className={
                          submission.status === 'approved' ? 'bg-green-100 text-green-800 border-green-200' :
                          submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                          'bg-red-100 text-red-800 border-red-200'
                        }
                      >
                        {submission.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="border-2 border-border/50">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
            <CardTitle className="text-xl">Category Distribution</CardTitle>
            <CardDescription>Tools by category</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              </div>
            ) : Object.keys(categoryDistribution).length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Icons.Component className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No categories yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.entries(categoryDistribution).map(([category, count]: [string, any]) => {
                  const percentage = stats.totalTools > 0 ? (count / stats.totalTools) * 100 : 0;
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{category}</span>
                        <span className="text-muted-foreground">{count} tools</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Submission Trend */}
      <Card className="border-2 border-border/50">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
          <CardTitle className="text-xl">Submission Trend</CardTitle>
          <CardDescription>Submissions over the last 7 days</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-end justify-between h-48 gap-2">
                {submissionTrend.map((item, index) => {
                  const maxCount = Math.max(...submissionTrend.map(t => t.count), 1);
                  const height = (item.count / maxCount) * 100;
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex items-end justify-center" style={{ height: '160px' }}>
                        <div 
                          className="w-full bg-gradient-to-t from-primary to-primary/70 rounded-t-lg transition-all hover:from-primary/90 hover:to-primary/80"
                          style={{ height: `${Math.max(height, 5)}%` }}
                          title={`${item.count} submissions on ${item.date}`}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground text-center">{item.date}</span>
                      <span className="text-sm font-semibold">{item.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
