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
    "Cyber Security Analyst, with 2 years of experience in Telecommunications and a Cyber Security Service provider.",
  avatarUrl: "https://avatars.githubusercontent.com/u/21278320?s=400&u=2fdda260ac0573365e74dc5a93bd60a034fde21d&v=4",
  contact: {
    email: "haighminassian01@gmail.com",
    tel: "+6100000000",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/haigh-cyber",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haighm/",
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
      title: "Network Service Desk analyst / Endpoint Security ",
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
    ,
    {
      title: "Penetration Testing Report Automation",
      techStack: ["Python"],
      description: "A terminal-based program designed to streamline the reporting process for security engagements.",
      link: {
        label: " ",
        href: "https://github.com/haigh-cyber/Pentest-Report-Automation",
      },
    },
    {
      title: "Log Analysis and Report",
      techStack: ["Log Analysis"],
      description: "Analysed an incident involving malware downloaded from an infected webserver",
      link: {
        label: " ",
        href: "https://drive.google.com/drive/folders/1UiPYAVVNKF87zMBYi1lc8sd4UG2u4SiB?usp=drive_link",
      },
    },
    {
      title: "Incident Report Analysis",
      techStack: ["Inident Response"],
      description: "Analysed and responded to a Distributed Denial of Service (DDoS) attack using the NIST Cybersecurity Framework",
      link: {
        label: " ",
        href: "https://docs.google.com/document/d/1b4dTUHMt6f6TTQID1VdqemyXb6yN1K0BfuHJWItD4nU/edit?usp=sharing",
      },
    },
    {
      title: "Investigating Security Incidents using SQL Query Filters",
      techStack: ["SQL"],
      description: "Developed and implemented SQL queries with specific filters to investigate security incidents",
      link: {
        label: " ",
        href: "https://docs.google.com/document/d/1f63LkhvmfYnr1MM7O1uCRS20dr25QOIqqyBsnvbKdHc/edit?usp=sharing",
      },
    },
    {
      title: "Linux Firewall Configuration using iptables",
      techStack: ["Linux", "iptables"],
      description: "Configuration and management of a Linux firewall using iptables for securing a server by defining rules for incoming and outgoing traffic",
      link: {
        label: " ",
        href: "https://docs.google.com/document/d/1m1a_4WUrnUoapo-YFaKrfAhjC65Ts0RQIYFvBl6NB9w/edit?usp=sharing",
      },
    },
    {
      title: "Monitoring Logs using Splunk Security Enterprise",
      techStack: ["Splunk", "Log Analysis", "Reporting", "Visualisation"],
      description: "Monitoring and analysing SSH login attempts using Splunk Security Enterprise to enhance security and detect potential threats",
      link: {
        label: " ",
        href: "https://docs.google.com/document/d/1ZrmjO8Hkeiu7o0_m-9rxqTJm1uSSa-snzEUIKjsT0gA/edit?usp=sharing",
      },
    },
  ],

  HTB: [
    {
      title: "Editorial",
      techStack: ["Burp Suite","SSRF Exploitation","Git","OSINT","Python Scripting"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Editorial-194fe06a688b45b0abcb2f693c7e0211",
      },
    },
    {
      title: "Headless",
      techStack: ["Burp Suite","XSS Exploitation","Reverse Shell Techniques","Sudo Priviledge Exploitation"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Headless-38032d949e2d4c8281d1c07135db7296?pvs=4",
      },
    },

    {
      title: "PermX",
      techStack: ["Fuff","Subdomain discovery","Reverse php Shell","Symlink", "OSINT", "Nmap"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/PermX-42762e9e8163423dbdb4529b0b94b81d",
      },
    },


    {
      title: "BoardLight",
      techStack: ["Gobuster","Nmap","Burp Suite", "OSINT", "PHP code injection", "SUID binary exploitation"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Boardlight-c05b923ef7fc424b8f093ceb1a47d47e?pvs=25",
      },
    },



    {
      title: "Greenhorn",
      techStack: ["Nmap","Directory Traversal","John The Ripper","Netcat","Depix", "OSINT"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Greenhorn-81bba3f098b04f7497870c13dbdfeebf?pvs=25",
      },
    },


    {
      title: "Usage",
      techStack: ["SQL Injection","Sqlmap","John The Ripper","Unristricted File Upload", "Client Side Filter Bypass", "Port Forwarding"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Usage-8667a50ed9194801b91640faca7b7c28?pvs=25",
      },
    },

    {
      title: "Perfection",
      techStack: ["Gobuster","SSTI Vulnerability","Command Line Injection","SQL", "Hashcat"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Perfection-69ece10265704850a9f61da594596d84",
      },
    },


    // More HTB write-ups can be added here...
    {
      title: "SolidState",
      techStack: ["Nmap", "GoBuster", "Default Credentials", "SSH"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/SolidState-37ede840825a4a8aafc2512dd71bee9d?pvs=4",
      },
    },
    {
      title: "Keeper",
      techStack: ["Nmap", "Web Hosts File Modification", "KeePass","SSH", "PuttyGen"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Keeper-074f04e145074f9586367559fe1711b3?pvs=4",
      },
    },

    {
      title: "Nibbles",
      techStack: ["Nmap", "Burp Suite", "Gobuster","Bash Scripting", "PHP Reverse Shell"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Nibbles-b102e55e7c914ef5928a2783b03ede45?pvs=4",
      },
    },

    {
      title: "Bashed",
      techStack: ["Nmap", "Gobuster","Nikto", "PHP Reverse Shell"],
      description: " ",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Bashed-e1ae1c3c5902499cb175deb0b69f61ab?pvs=4",
      },
    },
    {
      title: "Shocker",
      techStack: ["CVE Exploitation ", "Python","Gobuster", "Nmap"],
      description: "",
      link: {
        label: "Read more",
        href: "https://haighs.notion.site/Shocker-053848766c784f029bdc0661a4069c2e?pvs=4",
      },
    },
  ],



} as const;
