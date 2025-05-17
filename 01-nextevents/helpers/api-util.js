import { getAllEvents as getDummyEvents, getFeaturedEvents as getDummyFeaturedEvents, getEventById as getDummyEventById, getFilteredEvents as getDummyFilteredEvents } from '../dummy-data';

export async function getAllEvents() {
  return getDummyEvents();
}

export async function getFeaturedEvents() {
  return getDummyFeaturedEvents();
}

export async function getEventById(id) {
  return getDummyEventById(id);
}

export async function getFilteredEvents(dateFilter) {
  return getDummyFilteredEvents(dateFilter);
}
