import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Haigh Minassian",
  initials: "HM",
  location: "Sydney, NSW, Australia",
  locationLink: "https://www.google.com/maps/place/Sydney+NSW/@-33.8464886,150.2725555,9z/data=!3m1!4b1!4m6!3m5!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955!16zL20vMDZ5NTc?entry=ttu",
  about:
    "Cybersecurity professional and python programmer",
  summary:
    "Cyber Security Analyst and Level 1 Security Operations Centre (SOC) Analyst, with 2 years of experience in Telecommunications and a Cyber Security Service provider.",
  avatarUrl: "https://avatars.githubusercontent.com/u/21278320?s=400&u=2fdda260ac0573365e74dc5a93bd60a034fde21d&v=4",
  contact: {
    email: "haighminassian01@gmail.com",
    tel: "+61424628160",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/haigh-cyber",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Technology Sydney",
      degree: "Bachelor's Degree in Information Technology",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Gridware",
      link: "https://www.gridware.com.au/",
      badges: ["Remote"],
      title: "Intern",
      start: "July 2023",
      end: "December 2023",
      description:
        "Selected from 800 applicants. Internship covered Offensive Security, Governance Risk and Compliance and Incident Response departments.",
    },
    {
      company: "IPSTAR Australia",
      link: "https://ipstarbroadband.com.au/",
      badges: ["Hybrid"],
      title: "Network Service Desk analyst / Level 1 SOC analyst ",
      start: "March 2022",
      end: "August 2023",
      description:
        "Network and technical support utilizing satellite, fixed line, and fixed wireless services through ticket resolution, online chat interactions, and calls. As well as Used Microsoft Defender to enhance threat detection and response capabilities.",
    },
  ],
  skills: [

    "Python",
    "Nmap",
    "Wireshark",
    "Hashcat",
    "Gobuster",
    "Microsoft 365 Suite",
    "Microsoft Defender",
    "Linux/Windows/Mac",
    "Nessus",
    "Burp Suite",
    "Metasploit",
    "Active Directory",
    "Bash command line",
    "Powershell",
    "SQL",
    "VMware",
    "Selenium",
    "Flask",
    "Numpy",
    "Matplotlib",
    "API request and creating",
    "Pandas",
    "WTForms",
    "Tkinter",
    "SQLAlchemy",
  ],



  projects: [
    {
      title: "Password Management Application",
      techStack: [
        "Python",
        "Tkinter",
      ],
      description: "Local password management storage",
      link: {
        label: " ",
        href: "https://github.com/haigh-cyber/Password-Management-Application",
      },
    }
  ],

  HTB: [
    {
      title: "Headless",
      techStack: ["Burp Suite","XSS Exploitation","Reverse Shell Techniques","Sudo Priviledge Exploitation"],
      description: "I gained root access on the Headless box by exploiting an XSS vulnerability to access the admin dashboard, initiating a reverse shell, and modifying a script that I could run with sudo to escalate my privileges",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Headless-38032d949e2d4c8281d1c07135db7296?pvs=4",
      },
    },
    // More HTB write-ups can be added here...
    {
      title: "SolidState",
      techStack: ["Nmap", "GoBuster", "Default Credentials", "SSH"],
      description: "Exploiting default credentials on the JAMES Remote Administration Tool to gain root access, which allowed me to retrieve user SSH credentials and capture the user-level flag.",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/SolidState-37ede840825a4a8aafc2512dd71bee9d?pvs=4",
      },
    },
    {
      title: "Keeper",
      techStack: ["Nmap", "Web Hosts File Modification", "KeePass","SSH", "PuttyGen"],
      description: "I secured user and root flags on the Keeper box after finding web credentials, using them to uncover an SSH key through KeePass exploits, and then accessing the system as root.",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Keeper-074f04e145074f9586367559fe1711b3?pvs=4",
      },
    },

    {
      title: "Nibbles",
      techStack: ["Nmap", "Burp Suite", "Gobuster","Bash Scripting", "PHP Reverse Shell"],
      description: "I exploited weak admin credentials and script vulnerabilities on the Nibbles box to upload a reverse shell, eventually gaining root access to retrieve both user and root flags.",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Nibbles-b102e55e7c914ef5928a2783b03ede45?pvs=4",
      },
    },

    {
      title: "Bashed",
      techStack: ["Nmap", "Gobuster","Nikto", "PHP Reverse Shell"],
      description: "I gained root on the Bashed box by exploiting a web shell in a writable script within the '/dev' directory and scheduling a reverse shell as a root-owned task.",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Bashed-e1ae1c3c5902499cb175deb0b69f61ab?pvs=4",
      },
    },
    {
      title: "Shocker",
      techStack: ["CVE Exploitation ", "Python","Gobuster", "Nmap"],
      description: "I exploited the Shellshock vulnerability in 'user.sh' on the Shocker box, gaining user access and then leveraging 'scriptmanager's sudo privileges to run a script as root and capture the root flag.",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Shocker-053848766c784f029bdc0661a4069c2e?pvs=4",
      },
    },
  ],



} as const;
