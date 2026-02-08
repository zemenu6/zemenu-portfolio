import { SiPython, SiJavascript, SiReact, SiFlutter, SiTensorflow, SiKalilinux, SiGit, SiDocker } from 'react-icons/si';
import { FaDatabase, FaTerminal } from 'react-icons/fa';

export const skills = {
  "Machine Learning": [
    { name: "Python", icon: SiPython },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "NLP", icon: SiPython },
  ],
  "Mobile Development": [
    { name: "Flutter", icon: SiFlutter },
    { name: "Dart", icon: SiFlutter },
  ],
  "Web Development": [
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
  ],
  "Cybersecurity": [
    { name: "Kali Linux", icon: SiKalilinux },
    { name: "Bash", icon: FaTerminal },
  ],
  "Tools": [
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "SQL", icon: FaDatabase },
  ]
};
