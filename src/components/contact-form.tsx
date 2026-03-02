"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form action="https://formsubmit.co/sopan.tripathi@gmail.com" method="POST" className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" type="text" name="name" placeholder="John Doe" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" placeholder="john.doe@university.edu" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="institution">Institution</Label>
        <Input id="institution" type="text" name="institution" placeholder="University of Example" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea id="message" name="message" placeholder="Tell us a bit about your needs" />
      </div>
      <Button type="submit" className="w-full">Submit Request</Button>
    </form>
  );
}
