import {
  Award,
  BadgeCheck,
  BrainCircuit,
  Cloud,
  Code2,
  Download,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Phone,
  Send,
  Server,
  Sparkles,
  Sun,
  UsersRound,
  X,
} from "lucide-react";

const icons = {
  Award,
  BadgeCheck,
  BrainCircuit,
  Cloud,
  Code2,
  Download,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Phone,
  Send,
  Server,
  Sparkles,
  Sun,
  UsersRound,
  X,
};

export default function Icon({ name, ...props }) {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon aria-hidden="true" {...props} />;
}
