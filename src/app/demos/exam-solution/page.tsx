'use client';

import React from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  BarChart,
  User,
  ChevronDown,
  Bell,
  Timer,
  BookOpen
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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

const availableExams = [
    { code: 'CS-301', name: 'Data Structures', date: '2024-08-10', duration: '90 mins', status: 'Upcoming' },
    { code: 'PH-101', name: 'Quantum Mechanics', date: '2024-08-12', duration: '120 mins', status: 'Upcoming' },
    { code: 'MA-205', name: 'Differential Equations', date: '2024-08-15', duration: '90 mins', status: 'Upcoming' },
];

export default function ExamSolutionPage() {
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
                <LayoutDashboard />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#exams">
                <ClipboardList />
                My Exams
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#results">
                <BarChart />
                Results
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="#profile">
                <User />
                Profile
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
          <div className="flex items-center gap-4">
             <SidebarTrigger className="md:hidden"/>
             <h1 className="text-lg font-semibold md:text-xl">Examination Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="https://picsum.photos/seed/exam-student/40/40" alt="Student" />
                    <AvatarFallback>SN</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                    <p className="text-sm font-medium">Sneha Reddy</p>
                    <p className="text-xs text-muted-foreground">sneha.r@example.com</p>
                </div>
                 <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
             <Button asChild variant="outline">
                <Link href="/#exams">Back to Main Site</Link>
             </Button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Available Exams</CardTitle>
                    <CardDescription>Upcoming exams you are scheduled to take.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Exam</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {availableExams.map(exam => (
                                <TableRow key={exam.code}>
                                    <TableCell>
                                        <div className="font-medium">{exam.name}</div>
                                        <div className="text-sm text-muted-foreground">{exam.code}</div>
                                    </TableCell>
                                    <TableCell>{exam.date}</TableCell>
                                    <TableCell>
                                        <Button size="sm">Start Exam</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle>Sample Question Interface</CardTitle>
                    <CardDescription>This is how your exam questions will appear.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                   <div>
                        <p className="font-semibold mb-4">Question 5 of 50</p>
                        <p className="mb-6">What is the output of the following C code snippet?</p>
                        <pre className="bg-muted p-4 rounded-md text-sm mb-6"><code>{`#include <stdio.h>\nint main() {\n    printf("%d", (3 > 2) && (5 < 4));\n    return 0;\n}`}</code></pre>
                        <RadioGroup>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="a" id="r1" />
                                <Label htmlFor="r1">1</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <RadioGroupItem value="b" id="r2" />
                                <Label htmlFor="r2">0</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <RadioGroupItem value="c" id="r3" />
                                <Label htmlFor="r3">Compilation Error</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <RadioGroupItem value="d" id="r4" />
                                <Label htmlFor="r4">Undefined</Label>
                            </div>
                        </RadioGroup>
                   </div>
                    <div className="mt-8 flex justify-between items-center">
                        <Button variant="outline">Previous</Button>
                        <Button>Next & Save</Button>
                    </div>
                </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
