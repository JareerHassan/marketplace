'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import api from '@/lib/api';

export default function MyToolsPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('userToken');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    fetchMySubmissions();
  }, [router]);

  const fetchMySubmissions = async () => {
    try {
      setLoading(true);
      const response = await api.get('/submissions/my-submissions');
      setSubmissions(response.data);
    } catch (err: any) {
      console.error('Error fetching submissions:', err);
      setError(err.response?.data?.message || 'Failed to load your tools');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      approved: 'bg-green-100 text-green-800 border-green-200',
      rejected: 'bg-red-100 text-red-800 border-red-200',
    };
    return (
      <Badge variant="outline" className={styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Tools</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your submitted tools
          </p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Tools
          </h1>
          <p className="text-muted-foreground mt-2">
            View and manage your submitted tools
          </p>
        </div>
        <Button 
          onClick={() => router.push('/seller/dashboard/submit-tool')}
          className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg"
        >
          <Icons.Upload className="mr-2 h-4 w-4" />
          Submit New Tool
        </Button>
      </div>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      <Card className="border-2 border-border/50">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
          <CardTitle className="text-xl">My Submitted Tools</CardTitle>
          <CardDescription>
            A list of all tools you have submitted for review
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {submissions.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Icons.Component className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No tools submitted yet</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Start sharing your tools with the community. Submit your first tool and get it reviewed by our team.
              </p>
              <Button 
                onClick={() => router.push('/seller/dashboard/submit-tool')}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg"
              >
                <Icons.Upload className="mr-2 h-4 w-4" />
                Submit Your First Tool
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-semibold">Tool Name</TableHead>
                    <TableHead className="font-semibold">Category</TableHead>
                    <TableHead className="font-semibold">Pricing</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Submitted</TableHead>
                    <TableHead className="text-right font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission: any) => (
                    <TableRow key={submission._id} className="hover:bg-primary/5 transition-colors">
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-semibold text-foreground">{submission.toolName}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-xs mt-1">
                            {submission.description}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {submission.category ? (
                          <Badge variant="outline" className="text-primary border-primary bg-primary/5">
                            {submission.category.name}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">N/A</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {submission.isPaid ? (
                          <span className="font-semibold text-green-600">
                            ${submission.price?.toFixed(2) || '0.00'}
                          </span>
                        ) : (
                          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">
                            Free
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(submission.status)}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(submission.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          {submission.website && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => window.open(submission.website, '_blank')}
                              className="hover:bg-primary/10 hover:text-primary"
                            >
                              <Icons.ArrowRight className="mr-1 h-4 w-4" />
                              View
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
