export interface TimeSlotDTO {
  _id: string;
  date: string;
  start_time: string;
  end_time: string;
  lecturer: {
    _id: string;
    name: string;
  };
  hall: {
    _id: string;
    hallName: string;
  };
  module: {
    _id: string;
    moduleName: string;
  };
  slot_type: string;
  sessionType: string;
}
