// @ts-nocheck
import AuthService from "../../../services/AuthService";
import { TimeSlotDTO } from "../models/TimeTableSlot";

const api = AuthService.getInstance();
const baseUrl = "/time-slots";

const getAllTimeSlots = async (): Promise<TimeSlotDTO[] | undefined> => {
  try {
    const response = await api.get(`${baseUrl}/all`);
    const data = response.filterTimeSlots as TimeSlotDTO[];
    return data;
  } catch (error) {
    console.error("Error fetching time slots", error);
    return undefined;
  }
};
const addTimeSlot = async (
  date: any,
  startTime: string,
  endTime: string,
  lecturer: any,
  hall: any,
  sessionType: any,
  module: any
) => {
  try {
    startTime = `${date}T${startTime}:00.000Z`;
    endTime = `${date}T${endTime}:00.000Z`;
    const timeSlot = {
      date,
      startTime,
      endTime,
      lecturer,
      hall,
      sessionType,
      slot_type: "ordinary",
      module,
    };
    const response = await api.post(`${baseUrl}/add`, timeSlot);
    return response;
  } catch (error) {
    console.error("Error adding time slot", error);
    return undefined;
  }
};

export { getAllTimeSlots, addTimeSlot };
