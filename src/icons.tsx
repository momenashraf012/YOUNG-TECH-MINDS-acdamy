import type { LucideIcon, LucideProps } from 'lucide-react';
import {
  ArrowRight,
  AtSign,
  Bot,
  BrainCircuit,
  Camera,
  Check,
  CheckCircle2,
  Code2,
  Crown,
  Facebook,
  Gamepad2,
  Globe,
  Mail,
  Menu,
  MousePointerClick,
  Palette,
  Phone,
  Play,
  Rocket,
  Send,
  Smartphone,
  Sparkles,
  Star,
  User,
  Users,
  X,
  Zap,
} from 'lucide-react';

/** Maps the string icon keys used in copy/data to lucide-react components. */
const registry: Record<string, LucideIcon> = {
  'arrow-right': ArrowRight,
  'at-sign': AtSign,
  bot: Bot,
  'brain-circuit': BrainCircuit,
  camera: Camera,
  check: Check,
  'check-circle-2': CheckCircle2,
  'code-2': Code2,
  crown: Crown,
  facebook: Facebook,
  'gamepad-2': Gamepad2,
  globe: Globe,
  mail: Mail,
  menu: Menu,
  'mouse-pointer-click': MousePointerClick,
  palette: Palette,
  phone: Phone,
  play: Play,
  rocket: Rocket,
  send: Send,
  smartphone: Smartphone,
  sparkles: Sparkles,
  star: Star,
  user: User,
  users: Users,
  x: X,
  zap: Zap,
};

interface IconProps extends LucideProps {
  name: string;
}

/** Render a Lucide icon by its data key. Unknown keys render nothing. */
export function Icon({ name, ...rest }: IconProps) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return <Cmp {...rest} />;
}
