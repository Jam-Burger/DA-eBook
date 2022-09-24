export const courses = [
    [
        { id: "EL111", name: "Basic Electronic Circuits", instructors: ["Ahlad Kumar", "Srimant Mandal"], slides: 23 },
        { id: "EL103", name: "Basic Electronic Circuits Lab", instructors: ["Kunal Patel"], slides: 0 },
        { id: "IC101", name: "Introduction to ICT", instructors: ["Anil Roy"], slides: 4 },
        { id: "IT112", name: "Introduction to Programming", instructors: ["Bakul Goyal", "Manish Khare"], slides: 17 },
        { id: "IT113", name: "Introduction to Programming Lab", instructors: ["Bakul Goyal", "Manish Khare"], slides: 0 },
        { id: "SC107", name: "Calculus", instructors: ["Nabin Sahu"], slides: 28 },
        { id: "PC110", name: "Language and Literature", instructors: ["Sweta Garg"], slides: 14 }
    ],
    [
        { id: "HM106", name: "Approaches to Indian Society", instructors: ["Bharani Kolipara"], slides: 5 },
        { id: "IC121", name: "Digital Logic and Computer Organization", instructors: ["Sreeja Rajendran", "Ayan Palchaudhuri"], slides: 13 },
        { id: "IT205", name: "Data Structures", instructors: ["Sunitha V", "Priyanka Singh"], slides: 23 },
        { id: "IT206", name: "Data Structure Lab using OOP", instructors: ["Rachit Chhaya"], slides: 6 },
        { id: "SC205", name: "Discrete Mathematics", instructors: ["Manish Gupta"], slides: 13 },
        { id: "SC217", name: "Electromagnetic Theory", instructors: ["Gautam Dutta"], slides: 18 }
    ],
    [
        { id: "CT203", name: "Signals and Systems", instructors: ["Rajib Lochan Das"], slides: 2 },
        { id: "HM216", name: "Science, Technology and Society", instructors: ["Shefali Jha"], slides: 4 },
        { id: "IT216", name: "Design and Analysis of Algorithms", instructors: ["Punit Bhateja, Supantha Pandit"], slides: 22 },
        { id: "IT227", name: "Computer Systems Programming", instructors: ["Amit Mankodi"], slides: 10 },
        { id: "SC223", name: "Linear Algebra", instructors: ["Aditya Tatu", "Rahul Muthu"], slides: 14 }
    ]
];

export const exams = [
    [   // Sem1
        "IC101 QP-Midsem-3Jan2022", "IT105 2020 pyq End sem paper", "IT105 First In-Sem Paper-Solution", "PC110 Midsem_2020", "SC107 Mid Semester A", "SC107 Mid Semester B", "SC107 Mid Semester C"
    ],
    [   // Sem2
        "ENDSEM_IT205_datastructures"
        , "IC121 PRACTICE QUESTIONS 1", "IC121 PRACTICE QUESTIONS 1 answer key"
        , "IC121 PRACTICE QUESTIONS 2", "IC121 PRACTICE QUESTIONS 2 answer key"
        , "IC121 PRACTICE QUESTIONS 3", "IC121 PRACTICE QUESTIONS 3 answer key"
        , "IC121 PRACTICE QUESTIONS 4", "IC121 PRACTICE QUESTIONS 4 answer key"
        , "IC121 PRACTICE QUESTIONS 5", "IC121 PRACTICE QUESTIONS 5 answer key"
        , "IC121 PRACTICE QUESTIONS 6", "IC121 PRACTICE QUESTIONS 6 answer key"
        , "MT1_IT205_datastructures", "MT2_IT205_datastructures"
        , "SC217 Endsem", "SC217 Midsem1", "SC217 Midsem2"
    ],
    [   //Sem3
        "SC223 MT1_Autum2018", "SC223 MT1_Autumn2018Solns"
    ]
]

export const gallery = [
    { id: "Ganesh Chaturthi 2022", size: 6 },
    { id: "Janmashtami 2022", size: 7 },
    { id: "PMMC Club Clicks 2022", size: 6 },
    { id: "Synapse 2022", size: 9 },
    { id: "Teacher's Day 2022", size: 7 }
]

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