"use client";

import React from 'react';
import { Mail, Youtube, Facebook, Instagram, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const UserProfilePage = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white">
      <div className="text-center mb-8">
        <img src="https://img.freepik.com/free-photo/ai-generated-cute-girl-pic_23-2150649980.jpg" alt="Profile" className="rounded-full mx-auto mb-2" width={200} />
        <h1 className="text-2xl font-bold">Grace Perry Productions</h1>
        <p className="text-sm text-gray-600">Content Coach, Fempreneur & Creator</p>
        <div className="flex justify-center space-x-2 mt-2">
          <Button variant="ghost" size="icon"><Youtube size={20} /></Button>
          <Button variant="ghost" size="icon"><Mail size={20} /></Button>
          <Button variant="ghost" size="icon"><Facebook size={20} /></Button>
          <Button variant="ghost" size="icon"><Instagram size={20} /></Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="pr-4">
          <Card className="mb-4">
            <CardHeader className="flex items-center">
              <img src="https://img.freepik.com/free-photo/ai-generated-cute-girl-pic_23-2150649980.jpg" alt="Consultation" className="rounded-full mr-2" width={20} />
              <div>
                <h2 className="font-semibold">1:1 Creative Consultation</h2>
                <p className="text-xs text-gray-600">Book a private social media management or content creation consultation with me.</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">⭐ 5.0</span>
                <Link href="/booking">
                  <Button className="bg-rose-400 text-white">Schedule Call <ChevronRight size={16} /></Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardHeader>
              <h2 className="font-semibold">Content Coach Email Newsletter</h2>
              <p className="text-xs text-gray-600">Join my email list and never miss an update from your favorite Content Coach!</p>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter your name" className="mb-2" />
              <Input placeholder="Enter your email" className="mb-2" />
              <Input placeholder="Enter your phone number" className="mb-2" />
              <Button className="w-full bg-rose-400 text-white">Join Newsletter <ChevronRight size={16} /></Button>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader className="flex items-center">
              <img src="/api/placeholder/40/40" alt="Photoshoot" className="rounded-full mr-2" />
              <div>
                <h2 className="font-semibold">Level Up Photoshoot</h2>
                <p className="text-xs text-gray-600">Book a private branding photoshoot with me.</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="font-bold">$999</span>
                <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">⭐ 5.0</span>
              </div>
              <Button className="w-full mt-2 bg-rose-400 text-white">Level Up Photo Shoot <ChevronRight size={16} /></Button>
            </CardContent>
          </Card>
        </div>
        {/* <div className="w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div> */}

        <div className="pl-4">
          <Card className="mb-4">
            <CardHeader>
              <h2 className="font-semibold">Dinner of Dreams</h2>
              <p className="text-xs text-gray-600">An unforgettable evening for female entrepreneurs to connect deeper on September 26.</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-rose-400 text-white">Secure My Seat <ChevronRight size={16} /></Button>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <h2 className="font-semibold">Learn More</h2>
              <p className="text-xs text-gray-600">Visit my website to learn more about all of my creative services.</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-rose-400 text-white">Visit Website <ChevronRight size={16} /></Button>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <h2 className="font-semibold">FREE Elevate & Create Online Workshop</h2>
              <p className="text-xs text-gray-600">Build your business and brand online!</p>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter your name" className="mb-2" />
              <Input placeholder="Enter your email" className="mb-2" />
              <Button className="w-full bg-rose-400 text-white">WATCH WORKSHOP <ChevronRight size={16} /></Button>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader className="flex items-center">
              <img src="/api/placeholder/40/40" alt="Video Session" className="rounded-full mr-2" />
              <div>
                <h2 className="font-semibold">Level Up Video Session</h2>
                <p className="text-xs text-gray-600">Book a private content creation session with me.</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="font-bold">$1,250</span>
                <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">⭐ 5.0</span>
              </div>
              <Button className="w-full mt-2 bg-rose-400 text-white">Book Video Session <ChevronRight size={16} /></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
