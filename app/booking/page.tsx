"use client";

import React, { useState } from 'react';
import { ChevronLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

const ConsultationBookingPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const augustDays = Array.from({ length: 31 }, (_, i) => i + 1);

    const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
    ];

    return (
        <div className="max-w-md mx-auto p-4 bg-white">
            <Link href="/">
                <Button className="mb-4">
                    <ChevronLeft size={16} /> Back to Profile
                </Button>
            </Link>

            <h1 className="text-2xl font-bold text-center mb-4">Work With Me 1:1</h1>
            <h2 className="text-xl font-semibold text-center mb-2">Choose Date</h2>
            <p className="text-center text-gray-600 mb-4">Asia/Calcutta</p>

            <Card className="mb-6">
                <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">August 2024</span>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center mb-2">
                        {daysOfWeek.map(day => (
                            <div key={day} className="text-sm font-medium">{day}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center">
                        {augustDays.map(day => (
                            <Button
                                key={day}
                                variant={selectedDate === day ? 'default' : 'outline'}
                                onClick={() => {
                                    setSelectedDate(day);
                                    setSelectedTimeSlot(null);
                                }}
                            >
                                {day}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {selectedDate && (
                <Card className="mb-6">
                    <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">Available Time Slots for August {selectedDate}, 2024</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((slot) => (
                                <Button
                                    key={slot}
                                    variant={selectedTimeSlot === slot ? 'default' : 'outline'}
                                    onClick={() => setSelectedTimeSlot(slot)}
                                >
                                    <Clock size={16} className="mr-2" />
                                    {slot}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            <form className="space-y-4">
                <Input placeholder="Enter your name" />
                <Input placeholder="Enter your email" />
                <Textarea placeholder="Message (optional)" className="h-24" />
                <Button
                    className="w-full bg-rose-400 text-white"
                    disabled={!selectedDate || !selectedTimeSlot}
                >
                    Book a Call
                </Button>
            </form>
        </div>
    );
};

export default ConsultationBookingPage;
