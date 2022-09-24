export const courses = [
    [
    { id: "EL111", name: "Basic Electronic Circuits", instructors: ["Ahlad Kumar", "Srimant Mandal"], slides:23 },
    { id: "EL103", name: "Basic Electronic Circuits Lab", instructors: ["Kunal Patel"] },
    { id: "IC101", name: "Introduction to ICT", instructors: ["Anil Roy"] },
    { id: "IT112", name: "Introduction to Programming", instructors: ["Bakul Goyal", "Manish Khare"] },
    { id: "IT113", name: "Introduction to Programming Lab", instructors: ["Bakul Goyal", "Manish Khare"] },
    { id: "SC107", name: "Calculus", instructors: ["Nabin Sahu"] },
    { id: "PC110", name: "Language and Literature", instructors: ["Sweta Garg"] }
    ],
    [
    { id: "HM106", name: "Approaches to Indian Society", instructors: ["Bharani Kolipara"] },
    { id: "IC121", name: "Digital Logic and Computer Organization", instructors: ["Sreeja Rajendran", "Ayan Palchaudhuri"] },
    { id: "IT205", name: "Data Structures", instructors: ["Sunitha V", "Priyanka Singh"] },
    { id: "IT206", name: "Data Structure Lab using OOP", instructors: ["Rachit Chhaya"] },
    { id: "SC205", name: "Discrete Mathematics", instructors: ["Manish Gupta"] },
    { id: "SC217", name: "Electromagnetic Theory", instructors: ["Gautam Dutta"] }
    ],
    [
    { id: "CT203", name: "Signals and Systems", instructors: ["Rajib Lochan Das"] },
    { id: "HM216", name: "Science, Technology and Society", instructors: ["Shefali Jha"] },
    { id: "IT216", name: "Design and Analysis of Algorithms", instructors: ["Punit Bhateja, Supantha Pandit"] },
    { id: "IT227", name: "Computer Systems Programming", instructors: ["Amit Mankodi"] },
    { id: "SC223", name: "Linear Algebra", instructors: ["Aditya Tatu", "Rahul Muthu"] }
    ]
];
export const links = [
    {
        name: "Home",
        path: "/Home"
    },
    {
        name: "Academics",
        path: "/Academics"
    },
    {
        name: "Events",
        path: "/Events"
    },
    {
        name: "Calender",
        path: "/Calender"
    }
];
// Holidays 2022
export const holidays = [
    {
        date: "2022-01-14",
        event: "Makar Sankranti"
    },
    {
        date: "2022-01-26",
        event: "Republic Day"
    },
    {
        date: "2022-03-01",
        event: "Maha Shivratri"
    },
    {
        date: "2022-03-18",
        event: "Holi 2nd Day Holi"
    },
    {
        date: "2022-04-14",
        event: "Ambedkar Jayanti"
    },
    {
        date: "2022-04-15",
        event: "Good Friday"
    },
    {
        date: "2022-05-03",
        event: "Bhagvan Shree Parshuram Jayanti"
    },
    {
        date: "2022-08-09",
        event: "Muharram"
    },
    {
        date: "2022-08-11",
        event: "Raksha Bandhan"
    },
    {
        date: "2022-08-15",
        event: "Independence Day"
    },
    {
        date: "2022-08-16",
        event: "Pateti"
    },
    {
        date: "2022-08-19",
        event: "Janmashtami"
    },
    {
        date: "2022-08-31",
        event: "Samvatsari"
    },
    {
        date: "2022-10-05",
        event: "Dusshera"
    },
    {
        date: "2022-10-24",
        event: "Diwali"
    },
    {
        date: "2022-10-26",
        event: "Bhai Bij"
    },
    {
        date: "2022-10-31",
        event: "Sardar Vallabhbhai Patel's Birthday"
    },
    {
        date: "2022-11-08",
        event: "Guru Nanak's Birthday"
    }
]

// Lecture Time Table Sem-wise
export const timetable = [
    //Sem1
    [
        {
            day: "Monday",
            timeline: [
                {
                    startTime: "8:30",
                    endTime: "9:45",
                    course: "EL111"
                },
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "SC107"
                },
                {
                    startTime: "14:00",
                    endTime: "16:00",
                    course: "IC101"
                }]
        },
        {
            day: "Tuesday",
            timeline: [
                {
                    startTime: "8:30",
                    endTime: "9:45",
                    course: "IT112"
                },
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "PC110"
                }]
        },
        {
            day: "Wednesday",
            timeline: [
                {
                    startTime: "8:30",
                    endTime: "9:45",
                    course: "IC101"
                },
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "SC107"
                },
                {
                    startTime: "14:00",
                    endTime: "16:00",
                    course: "EL103"
                }]
        },
        {
            day: "Thursday",
            timeline: [
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "EL111"
                },
                {
                    startTime: "14:00",
                    endTime: "16:00",
                    course: "SC107"
                }]
        },
        {
            day: "Friday",
            timeline: [
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "IT112"
                },
                {
                    startTime: "12:00",
                    endTime: "13:15",
                    course: "PC110"
                }]
        },
        {
            day: "Saturday",
            timeline: [
                {
                    startTime: "8:30",
                    endTime: "9:45",
                    course: "IT113"
                }]
        }
    ],
    //Sem2
    [
        {
            day: "Monday",
            timeline: [
                {
                    startTime: "8:30",
                    endTime: "9:45",
                    course: "IT206"
                },
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "SC217"
                },
                {
                    startTime: "11:30",
                    endTime: "12:45",
                    course: "IT205"
                }
            ]
        },
        {
            day: "Tuesday",
            timeline: [
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "IC121"
                },
                {
                    startTime: "11:30",
                    endTime: "12:45",
                    course: "SC205"
                }
            ]
        },
        {
            day: "Wednesday",
            timeline: [
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "IT206"
                },
                {
                    startTime: "11:30",
                    endTime: "12:45",
                    course: "HM106"
                }
            ]
        },
        {
            day: "Thursday",
            timeline: [
                {
                    startTime: "8:30",
                    endTime: "9:45",
                    course: "IT205"
                },
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "SC205"
                }
            ]
        },
        {
            day: "Friday",
            timeline: [
                {
                    startTime: "8:30",
                    endTime: "9:45",
                    course: "SC217"
                },
                {
                    startTime: "10:15",
                    endTime: "11:30",
                    course: "IC121"
                },
                {
                    startTime: "11:30",
                    endTime: "12:45",
                    course: "HM106"
                }
            ]
        }
    ],
    //Sem3
    [
        {
            day: "Monday",
            timeline: [
                {
                    startTime: "8:00",
                    endTime: "8:50",
                    course: "IT227"
                },
                {
                    startTime: "9:00",
                    endTime: "9:50",
                    course: "CT203"
                },
                {
                    startTime: "10:00",
                    endTime: "10:50",
                    course: "HM216"
                },
                {
                    startTime: "11:00",
                    endTime: "11:50",
                    course: "IT216"
                }
            ]
        },
        {
            day: "Tuesday",
            timeline: [
                {
                    startTime: "10:00",
                    endTime: "10:50",
                    course: "SC223"
                },
                {
                    startTime: "11:00",
                    endTime: "11:50",
                    course: "HM216"
                }
            ]
        },
        {
            day: "Wednesday",
            timeline: [
                {
                    startTime: "9:00",
                    endTime: "9:50",
                    course: "IT216"
                },
                {
                    startTime: "10:00",
                    endTime: "10:50",
                    course: "CT203"
                },
                {
                    startTime: "11:00",
                    endTime: "11:50",
                    course: "IT227"
                }
            ]
        },
        {
            day: "Thursday",
            timeline: [
                {
                    startTime: "8:00",
                    endTime: "8:50",
                    course: "CT203"
                },
                {
                    startTime: "9:00",
                    endTime: "9:50",
                    course: "HM216"
                },
                {
                    startTime: "10:00",
                    endTime: "10:50",
                    course: "SC223"
                },
                {
                    startTime: "11:00",
                    endTime: "11:50",
                    course: "IT227"
                }
            ]
        },
        {
            day: "Friday",
            timeline: [
                {
                    startTime: "8:00",
                    endTime: "8:50",
                    course: "IT216"
                },
                {
                    startTime: "11:00",
                    endTime: "11:50",
                    course: "SC223"
                }
            ]
        }
    ]
]