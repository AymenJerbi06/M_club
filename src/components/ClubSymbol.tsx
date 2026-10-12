import {
  Activity, ArrowUpRight, CalendarDays, Check, Clock3, Coffee, Dumbbell,
  Heart, MapPin, Medal, Music2, Phone, ShieldCheck, Sparkles, Target,
  Users, Utensils, Waves,
} from "lucide-react";

const symbols = {
  activity: Activity,
  arrow: ArrowUpRight,
  calendar: CalendarDays,
  check: Check,
  clock: Clock3,
  coffee: Coffee,
  strength: Dumbbell,
  heart: Heart,
  location: MapPin,
  medal: Medal,
  music: Music2,
  phone: Phone,
  shield: ShieldCheck,
  recovery: Sparkles,
  target: Target,
  people: Users,
  food: Utensils,
  pool: Waves,
};

export type ClubSymbolName = keyof typeof symbols;

export default function ClubSymbol({ name, className }: { name: ClubSymbolName; className?: string }) {
  const Icon = symbols[name];
  return <Icon className={className} aria-hidden="true" strokeWidth={1.6} />;
}
