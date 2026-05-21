import { Info, CalendarClock } from "lucide-react";

interface InfoNoticeProps {
  message: string;
  secondaryMessage?: string;
}

export function InfoNotice({ message, secondaryMessage }: InfoNoticeProps) {
  return (
    <div className="mt-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 ring-1 ring-amber-200/50">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-sm">
          <Info className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-amber-800">{message}</p>
          {secondaryMessage && (
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-amber-700">
              <CalendarClock className="size-4" />
              <span>{secondaryMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
