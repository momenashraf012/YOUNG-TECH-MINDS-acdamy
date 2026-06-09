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
  Gamepad2,
  Globe,
  Mail,
  MousePointerClick,
  Play,
  Rocket,
  Send,
  Star,
  User,
  Users,
  X,
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
  'gamepad-2': Gamepad2,
  globe: Globe,
  mail: Mail,
  'mouse-pointer-click': MousePointerClick,
  play: Play,
  rocket: Rocket,
  send: Send,
  star: Star,
  user: User,
  users: Users,
  x: X,
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
