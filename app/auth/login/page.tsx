'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, User, Lock, Mail, Phone, Calendar, GraduationCap } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

   const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8080/api/auth/campus/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });

      if (!res.ok) throw new Error('Login failed');
      const data = await res.json();

      localStorage.setItem('token', data.token);
      console.log(data.user.position);

      // redirect sesuai position
      if (data.position === 'admin') {
        router.push('/admin/dashboard');
      } else if (data.position === 'student') {
        router.push('/student/home');
      } else if (data.position === 'lecturer') {
        router.push('/lecturer/home');
      } else {
        router.push('/');
      }
    } catch (err) {
      console.error(err);
      alert('Login gagal, cek username/password!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] flex items-center justify-center py-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white opacity-10 rounded-full"></div>
      </div>

      <div className="relative w-full max-w-md px-4">
        <Card className="backdrop-blur-sm bg-white/95 shadow-2xl">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
            </div>
            <div className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold">
                {isLogin ? 'Welcome Back' : 'Join BEM 2024'}
              </CardTitle>
              <CardDescription>
                {isLogin 
                  ? 'Sign in to access your student account'
                  : 'Create your account to get started'
                }
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form className="space-y-4" onSubmit={handleLogin}>
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input id="studentId" placeholder="STU001234" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+62 123 456 789" />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Username</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@university.edu"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="pl-10"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      Remember me
                    </Label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-[#3B82F6] hover:text-[#2563EB] font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {!isLogin && (
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                    I agree to the{' '}
                    <button type="button" className="text-[#3B82F6] hover:text-[#2563EB]">
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button type="button" className="text-[#3B82F6] hover:text-[#2563EB]">
                      Privacy Policy
                    </button>
                  </Label>
                </div>
              )}

              <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">
                <User className="w-4 h-4 mr-2"/>
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                or
              </span>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              
              <Button variant="outline" className="w-full">
                <GraduationCap className="w-4 h-4 mr-2" />
                Continue with University SSO
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#3B82F6] hover:text-[#2563EB] font-medium"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-6 backdrop-blur-sm bg-white/90">
          <CardContent className="p-4">
            <h3 className="font-semibold text-sm mb-2 flex items-center">
              <Phone className="w-4 h-4 mr-2 text-[#3B82F6]" />
              Need Help?
            </h3>
            <p className="text-xs text-gray-600 mb-2">
              Contact IT Support for login issues or account problems.
            </p>
            <div className="space-y-1 text-xs text-gray-500">
              <p>Email: support@bem.university.edu</p>
              <p>Phone: +62 123 456 789</p>
              <p>Office Hours: Mon-Fri 8AM-5PM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
