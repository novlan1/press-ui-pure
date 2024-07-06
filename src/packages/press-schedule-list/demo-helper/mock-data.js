import { SCHEDULE_INFO } from '../../press-schedule-list/demo-helper/data';

export function genMockScheduleItemData({
  info,
}) {
  return {
    ...SCHEDULE_INFO,
    battleList: [
      {
        ...(SCHEDULE_INFO.battleList[0] || {}),
        ...(info || {}),
      },
    ],
  };
}
