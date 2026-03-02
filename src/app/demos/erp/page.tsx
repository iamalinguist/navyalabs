'use client';

import React from 'react';
import {
  Bell,
  Home,
  Users,
  BookUser,
  GraduationCap,
  CalendarDays,
  CreditCard,
  Briefcase,
  BarChart3,
  ChevronDown,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Link from 'next/link';
import { Logo } from '@/components/logo';

const chartData = [
  { name: 'Jan', students: 45, admissions: 10 },
  { name: 'Feb', students: 48, admissions: 12 },
  { name: 'Mar', students: 52, admissions: 15 },
  { name: 'Apr', students: 55, admissions: 18 },
  { name: 'May', students: 58, admissions: 20 },
  { name: 'Jun', students: 60, admissions: 22 },
];

const recentStudents = [
  { name: 'Ananya Sharma', email: 'ananya.s@example.com', class: 'B.Tech CS', date: '2024-07-20', status: 'Enrolled' },
  { name: 'Rohan Verma', email: 'rohan.v@example.com', class: 'B.Com', date: '2024-07-19', status: 'Enrolled' },
  { name: 'Priya Singh', email: 'priya.s@example.com', class: 'B.Sc Physics', date: '2024-07-19', status: 'Enrolled' },
  { name: 'Amit Patel', email: 'amit.p@example.com', class: 'B.A. History', date: '2024-07-18', status: 'Enrolled' },
  { name: 'Sneha Reddy', email: 'sneha.r@example.com', class: 'B.Tech EE', date: '2024-07-17', status: 'Enrolled' },
];

export default function ErpDashboardPage() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
           <div className="px-2 py-1">
              <Logo />
           </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="#dashboard" isActive>
                <Home />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#sis">
                <BookUser />
                Student Information
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#admissions">
                <GraduationCap />
                Admissions
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#attendance">
                <Users />
                Attendance
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="#fees">
                <CreditCard />
                Fee Management
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#timetable">
                <CalendarDays />
                Timetable
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="#hr">
                <Briefcase />
                HR & Payroll
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#reports">
                <BarChart3 />
                Reports
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
          <div className="flex items-center gap-4">
             <SidebarTrigger className="md:hidden"/>
             <h1 className="text-lg font-semibold md:text-xl">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="https://picsum.photos/seed/erp-admin/40/40" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">admin@university.edu</p>
                </div>
                 <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
             <Button asChild variant="outline">
                <Link href="/">Back to Main Site</Link>
             </Button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Students
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,345</div>
                <p className="text-xs text-muted-foreground">
                  +2.5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  New Admissions
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+250</div>
                <p className="text-xs text-muted-foreground">
                  +15.2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Attendance Today
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.8%</div>
                <p className="text-xs text-muted-foreground">
                  -0.5% from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fees Collected</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹1.2 Cr</div>
                <p className="text-xs text-muted-foreground">
                  This month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Enrollment Statistics</CardTitle>
                <CardDescription>
                  New student admissions over the last 6 months.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="students" fill="hsl(var(--primary))" name="Total Students" />
                        <Bar dataKey="admissions" fill="hsl(var(--secondary))" name="New Admissions" />
                    </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Student Activity</CardTitle>
                <CardDescription>
                  New students enrolled in the last few days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentStudents.map((student) => (
                      <TableRow key={student.email}>
                        <TableCell>
                          <div className="font-medium">{student.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {student.email}
                          </div>
                        </TableCell>
                        <TableCell>
                           <Badge variant="outline">{student.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
