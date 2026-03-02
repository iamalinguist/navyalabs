'use client';

import React from 'react';
import {
  Home,
  Users,
  Briefcase,
  FileText,
  DollarSign,
  Building,
  ChevronDown,
  Search,
  Bell,
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
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Input } from '@/components/ui/input';

const facultyMembers = [
  { name: 'Dr. Aruna Sharma', department: 'Computer Science', publications: 25, email: 'aruna.s@example.edu' },
  { name: 'Dr. Rohan Verma', department: 'Physics', publications: 42, email: 'rohan.v@example.edu' },
  { name: 'Dr. Priya Singh', department: 'Chemistry', publications: 31, email: 'priya.s@example.edu' },
  { name: 'Dr. Amit Patel', department: 'History', publications: 18, email: 'amit.p@example.edu' },
];

const recentPublications = [
    { title: 'AI in Quantum Computing', authors: 'Dr. R. Verma, et al.', journal: 'Journal of Physics A', date: '2024-07-15' },
    { title: 'Novel Polymer Synthesis', authors: 'Dr. P. Singh, et al.', journal: 'Chemistry Today', date: '2024-07-12' },
    { title: 'Deep Learning for NLP', authors: 'Dr. A. Sharma, et al.', journal: 'IEEE Transactions on AI', date: '2024-07-10' },
];

export default function ResearchDashboardPage() {
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
              <SidebarMenuButton href="#faculty">
                <Users />
                Faculty
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#projects">
                <Briefcase />
                Research Projects
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#publications">
                <FileText />
                Publications
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="#grants">
                <DollarSign />
                Grants
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="#departments">
                <Building />
                Departments
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
          <div className="flex items-center gap-4">
             <SidebarTrigger className="md:hidden"/>
             <h1 className="text-lg font-semibold md:text-xl">Research & Faculty Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="pl-8 w-[200px] lg:w-[300px]" />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="https://picsum.photos/seed/research-dean/40/40" alt="Dean Research" />
                    <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                    <p className="text-sm font-medium">Dean Research</p>
                    <p className="text-xs text-muted-foreground">dean.research@university.edu</p>
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
                  Total Faculty
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">152</div>
                <p className="text-xs text-muted-foreground">
                  Across 15 departments
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Publications (YTD)
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">489</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ongoing Projects
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-muted-foreground">
                  Total grant value ₹25 Cr
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Grants Awarded</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹5.2 Cr</div>
                <p className="text-xs text-muted-foreground">
                  This fiscal year
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Faculty Directory</CardTitle>
                 <CardDescription>
                  Browse faculty members and their profiles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead className="text-right">Publications</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {facultyMembers.map((faculty) => (
                      <TableRow key={faculty.email}>
                        <TableCell className="align-top">
                          <div className="font-medium">{faculty.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {faculty.email}
                          </div>
                        </TableCell>
                        <TableCell className="align-top">{faculty.department}</TableCell>
                        <TableCell className="text-right align-top">{faculty.publications}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Publications</CardTitle>
                <CardDescription>
                  Latest research from our faculty.
                </CardDescription>
              </CardHeader>
              <CardContent>
                 <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Publication</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPublications.map((pub, index) => (
                      <TableRow key={index}>
                        <TableCell className="align-top">
                          <div className="font-medium">{pub.title}</div>
                          <div className="text-sm text-muted-foreground">{pub.authors} - <i>{pub.journal}</i></div>
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground align-top">{pub.date}</TableCell>
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
