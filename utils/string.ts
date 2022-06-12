type Duration = {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export function truncateString({
  text,
  start = 4,
  end = 4,
  separator = '...',
}: {
  text: string;
  start?: number;
  end?: number;
  separator?: string;
}): string {
  if (!text) {
    return text;
  }
  const textLength = text.length;
  if (textLength <= start + end) {
    return text;
  }
  const startText = text.substr(0, start);
  const endText = text.substr(textLength - end);
  return `${startText}${separator}${endText}`;
}

export function formatDuration(duration: Duration): string {
  const hours = duration?.hours ?? 0;
  const minutes = duration?.minutes ?? 0;
  const seconds = duration?.seconds ?? 0;
  const formattedHours = hours === 0 ? '' : hours < 10 ? `0${hours}:` : `${hours}:`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
}

export function toInteger2Digits(value: number): string {
  if (isNaN(value)) return '0';
  return value < 10 ? `0${value}` : `${value}`;
}
