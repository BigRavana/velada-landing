import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "event-1",
    title: "Main Event",
    fighters: ["fighter-1", "fighter-2"],
    type: "main-event",
    scheduledTime: "2026-06-15T22:00:00",
    status: "upcoming",
  },
  {
    id: "event-2",
    title: "Co-Main Event",
    fighters: ["fighter-3", "fighter-4"],
    type: "co-main-event",
    scheduledTime: "2026-06-15T21:00:00",
    status: "upcoming",
  },
  {
    id: "event-3",
    title: "Undercard 1",
    fighters: ["fighter-5", "fighter-6"],
    type: "undercard",
    scheduledTime: "2026-06-15T20:30:00",
    status: "upcoming",
  },
  {
    id: "event-4",
    title: "Undercard 2",
    fighters: ["fighter-7", "fighter-8"],
    type: "undercard",
    scheduledTime: "2026-06-15T20:00:00",
    status: "upcoming",
  },
  {
    id: "event-5",
    title: "Special Fight",
    fighters: ["fighter-9", "fighter-10"],
    type: "special",
    scheduledTime: "2026-06-15T19:30:00",
    status: "upcoming",
  },
  {
    id: "event-6",
    title: "Special Fight 2",
    fighters: ["fighter-11", "fighter-12"],
    type: "special",
    scheduledTime: "2026-06-15T19:00:00",
    status: "upcoming",
  },
];

export function getEventById(id: string): Event | undefined {
  return events.find((e) => e.id === id);
}

export function getEventsByType(type: Event["type"]): Event[] {
  return events.filter((e) => e.type === type);
}
