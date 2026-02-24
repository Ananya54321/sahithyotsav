export interface ScheduleEvent {
  session: "FN" | "AN" | "Online" | "Full Day";
  time: string;
  title: string;
  venue: string;
}

export interface ScheduleDay {
  day: string;
  events: ScheduleEvent[];
}

export const schedule: ScheduleDay[] = [
  {
    day: "Day 1 – 13th March 2026",
    events: [
      {
        session: "FN",
        time: "9:00 AM – 9:30 AM",
        title: "Registration & Welcome Kit Distribution",
        venue: "Main Entrance Hall",
      },
      {
        session: "FN",
        time: "10:00 AM – 10:45 AM",
        title: "Inauguration Ceremony",
        venue: "College Auditorium",
      },
      {
        session: "FN",
        time: "11:00 AM – 12:30 PM",
        title: "Youth Parliament – Preliminary Round",
        venue: "Seminar Hall A",
      },
      {
        session: "FN",
        time: "11:00 AM – 12:30 PM",
        title: "Writers' Hunt – Round 1",
        venue: "Campus Grounds",
      },
      {
        session: "AN",
        time: "2:00 PM – 3:30 PM",
        title: "Kaavya Manch – Hindi Poetry",
        venue: "Open Air Theatre",
      },
      {
        session: "AN",
        time: "2:00 PM – 3:30 PM",
        title: "Quiz Competition – Preliminary Round",
        venue: "Seminar Hall B",
      },
      {
        session: "AN",
        time: "4:00 PM – 5:30 PM",
        title: "Youth Parliament – Semi Finals",
        venue: "Seminar Hall A",
      },
      {
        session: "AN",
        time: "4:00 PM – 5:00 PM",
        title: "Writers' Hunt – Round 2",
        venue: "Library & Archives",
      },
      {
        session: "AN",
        time: "5:30 PM – 6:30 PM",
        title: "Alumni Talk – Session 1",
        venue: "College Auditorium",
      },
    ],
  },
  {
    day: "Day 2 – 14th March 2026",
    events: [
      {
        session: "FN",
        time: "9:30 AM – 11:00 AM",
        title: "Harry Potter Declamation – Preliminary",
        venue: "Seminar Hall A",
      },
      {
        session: "FN",
        time: "9:30 AM – 11:00 AM",
        title: "Quiz Competition – Semi Finals",
        venue: "Seminar Hall B",
      },
      {
        session: "FN",
        time: "11:30 AM – 1:00 PM",
        title: "Kaavya Manch – English Poetry",
        venue: "Open Air Theatre",
      },
      {
        session: "FN",
        time: "11:30 AM – 1:00 PM",
        title: "Writers' Hunt – Final Round",
        venue: "Central Library",
      },
      {
        session: "AN",
        time: "2:00 PM – 3:30 PM",
        title: "Youth Parliament – Grand Finale",
        venue: "College Auditorium",
      },
      {
        session: "AN",
        time: "2:00 PM – 3:00 PM",
        title: "Harry Potter Declamation – Finals",
        venue: "Seminar Hall A",
      },
      {
        session: "AN",
        time: "3:30 PM – 4:30 PM",
        title: "Quiz Competition – Grand Finale",
        venue: "College Auditorium",
      },
      {
        session: "AN",
        time: "4:30 PM – 5:30 PM",
        title: "Alumni Talk – Session 2",
        venue: "College Auditorium",
      },
      {
        session: "AN",
        time: "5:30 PM – 6:30 PM",
        title: "Valedictory Ceremony & Prize Distribution",
        venue: "College Auditorium",
      },
      {
        session: "AN",
        time: "6:30 PM – 7:00 PM",
        title: "Cultural Performance & Closing",
        venue: "Open Air Theatre",
      },
    ],
  },
];

export const eventsList = [
  "Youth Parliament",
  "Writers' Hunt",
  "Kaavya Manch",
  "Quiz Competition",
  "Alumni Talk",
  "Harry Potter Declamation",
];
