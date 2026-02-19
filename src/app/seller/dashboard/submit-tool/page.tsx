'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import api from '@/lib/api';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api';

export default function SubmitToolPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    toolName: '',
    description: '',
    website: '',
    category: '',
    isPaid: false,
    price: '',
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('userToken');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    // Fetch categories
    fetchCategories();
  }, [router]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/active`);
      setCategories(response.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData({ 
      ...formData, 
      isPaid: checked,
      price: checked ? formData.price : '' // Clear price if switching to free
    });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate
    if (!formData.toolName.trim() || !formData.description.trim() || !formData.website.trim() || !formData.category) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Validate price if paid
    if (formData.isPaid && (!formData.price || parseFloat(formData.price) <= 0)) {
      setError('Please enter a valid price for paid tools');
      setLoading(false);
      return;
    }

    try {
      const submissionData = {
        ...formData,
        price: formData.isPaid ? parseFloat(formData.price) : null,
      };
      await api.post('/submissions', submissionData);
      setSuccess(true);
      setFormData({
        toolName: '',
        description: '',
        website: '',
        category: '',
        isPaid: false,
        price: '',
      });
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to submit tool. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Submit a Tool</h1>
        <p className="text-muted-foreground mt-2">
          Share your tool with the community. Our team will review your submission.
        </p>
      </div>

      <Card className="bg-card border-2 border-primary/20 shadow-neon-green">
        <CardContent className="pt-6">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
              Tool submitted successfully! Our team will review it soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="toolName">Tool Name <span className="text-red-500">*</span></Label>
              <Input
                id="toolName"
                name="toolName"
                placeholder="Enter tool name"
                value={formData.toolName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your tool..."
                value={formData.description}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website URL <span className="text-red-500">*</span></Label>
              <Input
                id="website"
                name="website"
                type="url"
                placeholder="https://example.com"
                value={formData.website}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat: any) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="isPaid" className="text-base font-medium cursor-pointer">
                    This tool is paid
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Enable if users need to pay to use this tool
                  </p>
                </div>
                <Switch
                  id="isPaid"
                  checked={formData.isPaid}
                  onCheckedChange={handleSwitchChange}
                />
              </div>

              {formData.isPaid && (
                <div className="space-y-2">
                  <Label htmlFor="price">
                    Price (USD) <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={handleChange}
                      className="pl-7"
                      required={formData.isPaid}
                    />
                  </div>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full" variant="default" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Tool'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
