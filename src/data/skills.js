export const skills = [
  // SECURITY & PENTESTING (30 skills)
  {
    id: 'sql-injection-testing',
    name: 'SQL Injection Testing',
    shortDescription: 'Comprehensive SQL injection testing and exploitation techniques',
    fullDescription: 'Test for SQL injection vulnerabilities across different database systems. Includes detection, exploitation, and understanding of SQLi attack vectors in web applications.',
    category: 'Security & Pentesting',
    tags: ['security', 'web', 'database', 'owasp'],
    examplePrompts: [
      'Test this login form for SQL injection vulnerabilities',
      'Help me identify SQLi flaws in this API endpoint',
      'Perform automated SQL injection testing with sqlmap'
    ],
    relatedSkills: ['sqlmap-testing', 'broken-authentication', 'api-fuzzing'],
    keywords: ['injection', 'sql', 'database', 'authentication bypass']
  },
  {
    id: 'xss-testing',
    name: 'Cross-Site Scripting (XSS) Testing',
    shortDescription: 'Detect and exploit XSS vulnerabilities in web applications',
    fullDescription: 'Comprehensive techniques for detecting, exploiting, and understanding XSS and HTML injection attack vectors including stored, reflected, and DOM-based XSS.',
    category: 'Security & Pentesting',
    tags: ['security', 'web', 'javascript', 'owasp'],
    examplePrompts: [
      'Test for XSS vulnerabilities in this input field',
      'Help me bypass this content security policy',
      'Find reflected XSS in these URL parameters'
    ],
    relatedSkills: ['html-injection', 'csrf-testing', 'broken-authentication'],
    keywords: ['xss', 'javascript', 'injection', 'client-side']
  },
  {
    id: 'metasploit-framework',
    name: 'Metasploit Framework',
    shortDescription: 'Use Metasploit for penetration testing and exploit development',
    fullDescription: 'Comprehensive guidance for leveraging the Metasploit Framework including msfconsole, auxiliary modules, exploit development, and post-exploitation techniques.',
    category: 'Security & Pentesting',
    tags: ['security', 'pentesting', 'exploitation', 'metasploit'],
    examplePrompts: [
      'Use Metasploit to exploit this vulnerability',
      'Create a custom payload with msfvenom',
      'Perform post-exploitation with Meterpreter'
    ],
    relatedSkills: ['privilege-escalation', 'network-pentesting', 'exploitation'],
    keywords: ['metasploit', 'exploit', 'msfconsole', 'payload']
  },
  {
    id: 'burp-suite',
    name: 'Burp Suite Web Testing',
    shortDescription: 'Intercept and modify HTTP traffic for web security testing',
    fullDescription: 'Comprehensive guidance for using Burp Suite including proxy, scanner, repeater, and intruder for web application security testing.',
    category: 'Security & Pentesting',
    tags: ['security', 'web', 'proxy', 'scanner'],
    examplePrompts: [
      'Use Burp Suite to intercept this HTTP request',
      'Configure Burp proxy for mobile app testing',
      'Scan this web app with Burp Scanner'
    ],
    relatedSkills: ['web-pentesting', 'api-fuzzing', 'sql-injection-testing'],
    keywords: ['burp', 'proxy', 'intercept', 'scanner']
  },
  {
    id: 'wordpress-pentesting',
    name: 'WordPress Penetration Testing',
    shortDescription: 'Security assessment of WordPress sites with WPScan',
    fullDescription: 'Comprehensive WordPress security assessment methodologies including enumeration, vulnerability scanning, and exploitation of WordPress-specific flaws.',
    category: 'Security & Pentesting',
    tags: ['security', 'wordpress', 'cms', 'wpscan'],
    examplePrompts: [
      'Scan this WordPress site for vulnerabilities',
      'Enumerate WordPress users and plugins',
      'Exploit vulnerable WordPress plugins'
    ],
    relatedSkills: ['web-pentesting', 'vulnerability-scanning', 'enumeration'],
    keywords: ['wordpress', 'wpscan', 'cms', 'enumeration']
  },
  {
    id: 'network-pentesting',
    name: 'Network Penetration Testing',
    shortDescription: 'Network scanning, enumeration, and service exploitation',
    fullDescription: 'Comprehensive network pentesting including port scanning with Nmap, service enumeration, vulnerability identification, and network exploitation.',
    category: 'Security & Pentesting',
    tags: ['security', 'networking', 'nmap', 'scanning'],
    examplePrompts: [
      'Scan this network for open ports and services',
      'Enumerate SMB shares on this target',
      'Perform a comprehensive network pentest'
    ],
    relatedSkills: ['nmap-scanning', 'service-enumeration', 'metasploit-framework'],
    keywords: ['network', 'nmap', 'scanning', 'enumeration']
  },
  {
    id: 'privilege-escalation-linux',
    name: 'Linux Privilege Escalation',
    shortDescription: 'Escalate privileges on Linux systems from low-privilege shell',
    fullDescription: 'Comprehensive techniques for identifying and exploiting privilege escalation paths on Linux including SUID binaries, sudo misconfigurations, and kernel exploits.',
    category: 'Security & Pentesting',
    tags: ['security', 'linux', 'privilege-escalation', 'post-exploitation'],
    examplePrompts: [
      'Escalate privileges on this Linux system',
      'Find SUID binaries for privilege escalation',
      'Exploit sudo misconfigurations for root access'
    ],
    relatedSkills: ['linux-hardening', 'post-exploitation', 'enumeration'],
    keywords: ['privilege', 'escalation', 'linux', 'root']
  },
  {
    id: 'privilege-escalation-windows',
    name: 'Windows Privilege Escalation',
    shortDescription: 'Discover and exploit privilege escalation on Windows systems',
    fullDescription: 'Comprehensive guidance for discovering and exploiting privilege escalation vulnerabilities in Windows including service misconfigurations and token manipulation.',
    category: 'Security & Pentesting',
    tags: ['security', 'windows', 'privilege-escalation', 'active-directory'],
    examplePrompts: [
      'Escalate privileges on this Windows machine',
      'Find Windows misconfigurations for privesc',
      'Abuse Windows services for privilege escalation'
    ],
    relatedSkills: ['active-directory-attacks', 'post-exploitation', 'windows-internals'],
    keywords: ['privilege', 'escalation', 'windows', 'admin']
  },
  {
    id: 'active-directory-attacks',
    name: 'Active Directory Attacks',
    shortDescription: 'Attack Active Directory with Kerberoasting, DCSync, and more',
    fullDescription: 'Attack Active Directory environments using techniques like Kerberoasting, pass-the-hash, Golden Ticket, and BloodHound enumeration.',
    category: 'Security & Pentesting',
    tags: ['security', 'windows', 'active-directory', 'kerberos'],
    examplePrompts: [
      'Perform Kerberoasting on this domain',
      'Use BloodHound to map AD attack paths',
      'Execute a DCSync attack to extract credentials'
    ],
    relatedSkills: ['privilege-escalation-windows', 'powershell-pentesting', 'credential-dumping'],
    keywords: ['active directory', 'kerberos', 'golden ticket', 'bloodhound']
  },
  {
    id: 'sqlmap-testing',
    name: 'SQLMap Database Testing',
    shortDescription: 'Automate SQL injection testing with SQLMap',
    fullDescription: 'Comprehensive guidance for using SQLMap to detect and exploit SQL injection vulnerabilities, enumerate databases, and extract data.',
    category: 'Security & Pentesting',
    tags: ['security', 'database', 'automation', 'sqlmap'],
    examplePrompts: [
      'Use sqlmap to test this URL for SQL injection',
      'Dump database tables using sqlmap',
      'Automate SQL injection testing on this API'
    ],
    relatedSkills: ['sql-injection-testing', 'api-fuzzing', 'web-pentesting'],
    keywords: ['sqlmap', 'automation', 'database', 'injection']
  },
  {
    id: 'api-fuzzing',
    name: 'API Fuzzing & Testing',
    shortDescription: 'Fuzz APIs to find IDOR, broken auth, and security flaws',
    fullDescription: 'Test API security including REST and GraphQL endpoints, find IDOR vulnerabilities, test authentication, and perform comprehensive API pentesting.',
    category: 'Security & Pentesting',
    tags: ['security', 'api', 'rest', 'graphql'],
    examplePrompts: [
      'Fuzz this REST API for vulnerabilities',
      'Test for IDOR in these API endpoints',
      'Assess GraphQL API security'
    ],
    relatedSkills: ['idor-testing', 'broken-authentication', 'web-pentesting'],
    keywords: ['api', 'fuzzing', 'idor', 'rest']
  },
  {
    id: 'idor-testing',
    name: 'IDOR Vulnerability Testing',
    shortDescription: 'Find insecure direct object references and broken access control',
    fullDescription: 'Comprehensive guidance for detecting, exploiting, and remediating IDOR vulnerabilities including authorization bypass and access control flaws.',
    category: 'Security & Pentesting',
    tags: ['security', 'web', 'authorization', 'access-control'],
    examplePrompts: [
      'Test for IDOR vulnerabilities in this application',
      'Find broken access control in these endpoints',
      'Enumerate user IDs to access other accounts'
    ],
    relatedSkills: ['api-fuzzing', 'broken-authentication', 'authorization-testing'],
    keywords: ['idor', 'access control', 'authorization', 'bypass']
  },
  {
    id: 'broken-authentication',
    name: 'Broken Authentication Testing',
    shortDescription: 'Test for authentication flaws and session management issues',
    fullDescription: 'Comprehensive techniques for identifying authentication and session management weaknesses including credential stuffing, session fixation, and auth bypass.',
    category: 'Security & Pentesting',
    tags: ['security', 'authentication', 'session', 'bypass'],
    examplePrompts: [
      'Test for broken authentication in this login',
      'Assess session management security',
      'Find authentication bypass vulnerabilities'
    ],
    relatedSkills: ['session-hijacking', 'password-attacks', 'jwt-security'],
    keywords: ['authentication', 'session', 'bypass', 'credentials']
  },
  {
    id: 'ssh-pentesting',
    name: 'SSH Penetration Testing',
    shortDescription: 'Pentest SSH services with enumeration and exploitation',
    fullDescription: 'Comprehensive SSH penetration testing including configuration enumeration, brute forcing, key-based authentication testing, and SSH tunneling.',
    category: 'Security & Pentesting',
    tags: ['security', 'ssh', 'remote-access', 'brute-force'],
    examplePrompts: [
      'Enumerate SSH service configuration',
      'Brute force SSH credentials',
      'Test SSH key-based authentication security'
    ],
    relatedSkills: ['network-pentesting', 'credential-attacks', 'lateral-movement'],
    keywords: ['ssh', 'remote', 'brute-force', 'tunneling']
  },
  {
    id: 'smtp-pentesting',
    name: 'SMTP Penetration Testing',
    shortDescription: 'Test mail server security and enumerate email users',
    fullDescription: 'Comprehensive techniques for testing SMTP server security including user enumeration, open relay testing, and credential attacks.',
    category: 'Security & Pentesting',
    tags: ['security', 'email', 'smtp', 'enumeration'],
    examplePrompts: [
      'Enumerate email users via SMTP',
      'Test for open mail relay',
      'Assess SMTP server security'
    ],
    relatedSkills: ['network-pentesting', 'phishing-simulation', 'service-enumeration'],
    keywords: ['smtp', 'email', 'relay', 'enumeration']
  },
  {
    id: 'wireshark-analysis',
    name: 'Wireshark Network Analysis',
    shortDescription: 'Analyze network traffic and capture packets with Wireshark',
    fullDescription: 'Comprehensive techniques for network packet capture, filtering, protocol analysis, and detecting network anomalies using Wireshark.',
    category: 'Security & Pentesting',
    tags: ['security', 'networking', 'analysis', 'wireshark'],
    examplePrompts: [
      'Analyze this PCAP file for anomalies',
      'Filter HTTP traffic in Wireshark',
      'Detect suspicious network activity'
    ],
    relatedSkills: ['network-analysis', 'traffic-monitoring', 'intrusion-detection'],
    keywords: ['wireshark', 'pcap', 'traffic', 'analysis']
  },
  {
    id: 'shodan-recon',
    name: 'Shodan Reconnaissance',
    shortDescription: 'Search for exposed devices and services with Shodan',
    fullDescription: 'Use Shodan search engine, CLI, and API for penetration testing reconnaissance to discover exposed devices, services, and vulnerabilities.',
    category: 'Security & Pentesting',
    tags: ['security', 'reconnaissance', 'shodan', 'osint'],
    examplePrompts: [
      'Find exposed cameras using Shodan',
      'Search for vulnerable services with Shodan',
      'Perform reconnaissance on this IP range'
    ],
    relatedSkills: ['osint', 'reconnaissance', 'vulnerability-scanning'],
    keywords: ['shodan', 'reconnaissance', 'osint', 'exposed']
  },
  {
    id: 'cloud-pentesting-aws',
    name: 'AWS Penetration Testing',
    shortDescription: 'Test AWS security, enumerate IAM, and exploit misconfigurations',
    fullDescription: 'Comprehensive AWS security assessment including IAM enumeration, S3 bucket testing, privilege escalation, and cloud-specific vulnerabilities.',
    category: 'Security & Pentesting',
    tags: ['security', 'cloud', 'aws', 'iam'],
    examplePrompts: [
      'Enumerate AWS IAM permissions',
      'Test S3 bucket security configurations',
      'Escalate privileges in AWS environment'
    ],
    relatedSkills: ['cloud-security', 'iam-security', 'infrastructure-pentesting'],
    keywords: ['aws', 'cloud', 'iam', 's3']
  },
  {
    id: 'vulnerability-scanner',
    name: 'Vulnerability Scanner',
    shortDescription: 'OWASP 2025, supply chain security, and attack surface mapping',
    fullDescription: 'Advanced vulnerability analysis including OWASP Top 10, supply chain security assessment, attack surface mapping, and risk prioritization.',
    category: 'Security & Pentesting',
    tags: ['security', 'scanning', 'owasp', 'vulnerability'],
    examplePrompts: [
      'Scan this application for OWASP Top 10 vulnerabilities',
      'Assess supply chain security risks',
      'Map the attack surface of this system'
    ],
    relatedSkills: ['security-assessment', 'risk-analysis', 'compliance-testing'],
    keywords: ['vulnerability', 'scanner', 'owasp', 'assessment']
  },
  {
    id: 'red-team-tactics',
    name: 'Red Team Tactics',
    shortDescription: 'MITRE ATT&CK-based tactics, detection evasion, and reporting',
    fullDescription: 'Red team tactics based on MITRE ATT&CK including attack phases, detection evasion techniques, and comprehensive security reporting.',
    category: 'Security & Pentesting',
    tags: ['security', 'red-team', 'mitre-attack', 'evasion'],
    examplePrompts: [
      'Plan a red team operation using MITRE ATT&CK',
      'Evade detection during penetration testing',
      'Write a comprehensive red team report'
    ],
    relatedSkills: ['penetration-testing', 'threat-simulation', 'security-operations'],
    keywords: ['red team', 'mitre', 'attack', 'evasion']
  },
  {
    id: 'path-traversal',
    name: 'File Path Traversal Testing',
    shortDescription: 'Test for directory traversal and LFI vulnerabilities',
    fullDescription: 'Comprehensive file path traversal attack and testing methodologies to exploit directory traversal vulnerabilities and access files outside web root.',
    category: 'Security & Pentesting',
    tags: ['security', 'web', 'lfi', 'traversal'],
    examplePrompts: [
      'Test for directory traversal vulnerabilities',
      'Exploit path traversal to read system files',
      'Find local file inclusion flaws'
    ],
    relatedSkills: ['web-pentesting', 'file-upload-attacks', 'rfi-testing'],
    keywords: ['traversal', 'lfi', 'directory', 'path']
  },
  {
    id: 'html-injection',
    name: 'HTML Injection Testing',
    shortDescription: 'Test for HTML injection and content injection vulnerabilities',
    fullDescription: 'Comprehensive HTML injection attack techniques and testing methodologies for content injection vulnerabilities in web applications.',
    category: 'Security & Pentesting',
    tags: ['security', 'web', 'injection', 'html'],
    examplePrompts: [
      'Test for HTML injection vulnerabilities',
      'Inject malicious HTML into user inputs',
      'Assess content injection risks'
    ],
    relatedSkills: ['xss-testing', 'template-injection', 'web-pentesting'],
    keywords: ['html', 'injection', 'content', 'web']
  },
  {
    id: 'security-tools',
    name: 'Security Scanning Tools',
    shortDescription: 'Vulnerability scanning, network assessment, and security tools',
    fullDescription: 'Comprehensive guidance on security scanning tools including vulnerability scanners, network assessment tools, and automated security testing.',
    category: 'Security & Pentesting',
    tags: ['security', 'tools', 'scanning', 'automation'],
    examplePrompts: [
      'Recommend security scanning tools for web apps',
      'Scan network for vulnerabilities',
      'Automate security testing workflow'
    ],
    relatedSkills: ['vulnerability-scanner', 'network-pentesting', 'automation'],
    keywords: ['tools', 'scanning', 'security', 'automation']
  },
  {
    id: 'pentest-checklist',
    name: 'Penetration Testing Checklist',
    shortDescription: 'Structured methodology for comprehensive pentesting engagements',
    fullDescription: 'Structured penetration testing checklist including scope definition, reconnaissance, exploitation, and reporting best practices.',
    category: 'Security & Pentesting',
    tags: ['security', 'methodology', 'checklist', 'pentesting'],
    examplePrompts: [
      'Plan a penetration testing engagement',
      'Create a pentest scope and methodology',
      'Follow best practices for security assessment'
    ],
    relatedSkills: ['security-assessment', 'reporting', 'methodology'],
    keywords: ['pentest', 'checklist', 'methodology', 'assessment']
  },
  {
    id: 'pentest-commands',
    name: 'Penetration Testing Commands',
    shortDescription: 'Essential pentest commands for Nmap, Metasploit, Hydra, and more',
    fullDescription: 'Essential penetration testing command references including Nmap, Metasploit, Hydra, John, Nikto, and other critical security tools.',
    category: 'Security & Pentesting',
    tags: ['security', 'commands', 'tools', 'reference'],
    examplePrompts: [
      'Show me essential Nmap commands',
      'What are common Metasploit commands?',
      'Give me Hydra password cracking examples'
    ],
    relatedSkills: ['command-line-fu', 'tool-usage', 'automation'],
    keywords: ['commands', 'reference', 'tools', 'pentest']
  },
  {
    id: 'ethical-hacking',
    name: 'Ethical Hacking Methodology',
    shortDescription: 'Complete ethical hacking lifecycle and methodologies',
    fullDescription: 'Comprehensive ethical hacking methodology including reconnaissance, scanning, exploitation, post-exploitation, and professional reporting.',
    category: 'Security & Pentesting',
    tags: ['security', 'methodology', 'ethical-hacking', 'lifecycle'],
    examplePrompts: [
      'Explain the ethical hacking lifecycle',
      'Plan a comprehensive security assessment',
      'Follow ethical hacking best practices'
    ],
    relatedSkills: ['penetration-testing', 'security-assessment', 'professional-services'],
    keywords: ['ethical', 'hacking', 'methodology', 'lifecycle']
  },
  {
    id: 'network-101',
    name: 'Network 101 for Security',
    shortDescription: 'Network services, protocols, and configuration for pentesting',
    fullDescription: 'Network fundamentals for penetration testing including HTTP/HTTPS, SNMP, SMB configuration, and testing network services.',
    category: 'Security & Pentesting',
    tags: ['security', 'networking', 'protocols', 'fundamentals'],
    examplePrompts: [
      'Explain common network protocols for pentesting',
      'How do I test SMB configurations?',
      'Configure web servers for security testing'
    ],
    relatedSkills: ['network-pentesting', 'service-enumeration', 'protocol-analysis'],
    keywords: ['networking', 'protocols', 'services', 'fundamentals']
  },
  {
    id: 'linux-shell-scripts',
    name: 'Linux Security Shell Scripts',
    shortDescription: 'Bash automation for security tasks and system administration',
    fullDescription: 'Production-ready shell script templates for system administration, security monitoring, automation, and penetration testing tasks.',
    category: 'Security & Pentesting',
    tags: ['security', 'linux', 'bash', 'automation'],
    examplePrompts: [
      'Create a bash script for security monitoring',
      'Automate penetration testing tasks',
      'Write shell scripts for system hardening'
    ],
    relatedSkills: ['bash-scripting', 'automation', 'linux-administration'],
    keywords: ['bash', 'scripts', 'automation', 'linux']
  },
  {
    id: 'top-100-vulns',
    name: 'Top 100 Web Vulnerabilities',
    shortDescription: 'OWASP-aligned vulnerability taxonomy with mitigations',
    fullDescription: 'Comprehensive vulnerability definitions, root causes, impacts, and mitigation strategies across all major web security categories aligned with OWASP.',
    category: 'Security & Pentesting',
    tags: ['security', 'web', 'owasp', 'vulnerabilities'],
    examplePrompts: [
      'Explain common web vulnerabilities',
      'What are the OWASP Top 10 vulnerabilities?',
      'How do I mitigate injection attacks?'
    ],
    relatedSkills: ['owasp', 'web-security', 'vulnerability-management'],
    keywords: ['vulnerabilities', 'owasp', 'web', 'security']
  },
  {
    id: 'csrf-testing',
    name: 'CSRF Attack Testing',
    shortDescription: 'Test for Cross-Site Request Forgery vulnerabilities',
    fullDescription: 'Comprehensive CSRF testing techniques including token validation bypass, same-site cookie testing, and anti-CSRF defense assessment.',
    category: 'Security & Pentesting',
    tags: ['security', 'web', 'csrf', 'owasp'],
    examplePrompts: [
      'Test for CSRF vulnerabilities in this application',
      'Bypass CSRF token validation',
      'Assess anti-CSRF defenses'
    ],
    relatedSkills: ['xss-testing', 'session-security', 'web-pentesting'],
    keywords: ['csrf', 'forgery', 'token', 'bypass']
  },

  // FRONTEND DEVELOPMENT (25 skills)
  {
    id: 'react-patterns',
    name: 'React Patterns & Best Practices',
    shortDescription: 'Modern React patterns with hooks, composition, and TypeScript',
    fullDescription: 'Modern React patterns including hooks, composition, performance optimization, and TypeScript best practices for building maintainable applications.',
    category: 'Frontend Development',
    tags: ['react', 'javascript', 'frontend', 'patterns'],
    examplePrompts: [
      'Show me modern React patterns with hooks',
      'How do I optimize React component performance?',
      'Best practices for React with TypeScript'
    ],
    relatedSkills: ['react-ui-patterns', 'typescript-expert', 'component-architecture'],
    keywords: ['react', 'hooks', 'patterns', 'best-practices']
  },
  {
    id: 'nextjs-best-practices',
    name: 'Next.js App Router Best Practices',
    shortDescription: 'Server Components, data fetching, and routing patterns',
    fullDescription: 'Next.js App Router principles including Server Components, data fetching strategies, routing patterns, and modern Next.js architecture.',
    category: 'Frontend Development',
    tags: ['nextjs', 'react', 'ssr', 'app-router'],
    examplePrompts: [
      'Build a Next.js app with App Router',
      'Implement server components in Next.js',
      'Optimize data fetching in Next.js 14'
    ],
    relatedSkills: ['react-patterns', 'vercel-deployment', 'server-components'],
    keywords: ['nextjs', 'app-router', 'server-components', 'ssr']
  },
  {
    id: 'tailwind-patterns',
    name: 'Tailwind CSS v4 Patterns',
    shortDescription: 'CSS-first configuration and modern Tailwind patterns',
    fullDescription: 'Tailwind CSS v4 principles including CSS-first configuration, container queries, modern patterns, and design token architecture.',
    category: 'Frontend Development',
    tags: ['css', 'tailwind', 'styling', 'design-tokens'],
    examplePrompts: [
      'Set up Tailwind CSS v4 with custom theme',
      'Create responsive layouts with Tailwind',
      'Implement design tokens in Tailwind'
    ],
    relatedSkills: ['css-architecture', 'responsive-design', 'design-systems'],
    keywords: ['tailwind', 'css', 'styling', 'design-tokens']
  },
  {
    id: 'ui-ux-pro-max',
    name: 'UI/UX Design Intelligence',
    shortDescription: '50 styles, 21 palettes, design systems, and component libraries',
    fullDescription: 'Comprehensive UI/UX design with 50 styles, 21 color palettes, 50 font pairings, and support for React, Next.js, Vue, Svelte, and mobile frameworks.',
    category: 'Frontend Development',
    tags: ['design', 'ui', 'ux', 'systems'],
    examplePrompts: [
      'Design a modern dashboard with glassmorphism',
      'Create a color palette for my SaaS app',
      'Build a design system with shadcn/ui'
    ],
    relatedSkills: ['design-systems', 'component-library', 'visual-design'],
    keywords: ['ui', 'ux', 'design', 'systems']
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion Animations',
    shortDescription: 'Advanced animations with Framer Motion and React',
    fullDescription: 'Create smooth, performant animations with Framer Motion including layout animations, gesture controls, and advanced animation patterns.',
    category: 'Frontend Development',
    tags: ['animation', 'react', 'motion', 'interactions'],
    examplePrompts: [
      'Add smooth page transitions with Framer Motion',
      'Create gesture-based interactions',
      'Implement layout animations in React'
    ],
    relatedSkills: ['react-patterns', 'animation-patterns', 'performance-optimization'],
    keywords: ['animation', 'framer-motion', 'interactions', 'react']
  },
  {
    id: 'react-ui-patterns',
    name: 'React UI Patterns',
    shortDescription: 'Loading states, error handling, and data fetching patterns',
    fullDescription: 'Modern React UI patterns for loading states, error boundaries, suspense, data fetching, and managing complex UI states effectively.',
    category: 'Frontend Development',
    tags: ['react', 'ui', 'patterns', 'state-management'],
    examplePrompts: [
      'Handle loading states in React components',
      'Implement error boundaries',
      'Use React Suspense for data fetching'
    ],
    relatedSkills: ['react-patterns', 'state-management', 'error-handling'],
    keywords: ['react', 'ui', 'patterns', 'suspense']
  },
  {
    id: 'typescript-expert',
    name: 'TypeScript Expert',
    shortDescription: 'Type-level programming, performance, and advanced TypeScript',
    fullDescription: 'Deep TypeScript knowledge including type-level programming, performance optimization, migration strategies, and advanced TypeScript patterns.',
    category: 'Frontend Development',
    tags: ['typescript', 'javascript', 'types', 'programming'],
    examplePrompts: [
      'Write advanced TypeScript type utilities',
      'Migrate JavaScript project to TypeScript',
      'Optimize TypeScript build performance'
    ],
    relatedSkills: ['javascript-mastery', 'type-systems', 'compiler-optimization'],
    keywords: ['typescript', 'types', 'generics', 'advanced']
  },
  {
    id: 'frontend-design',
    name: 'Frontend Design Excellence',
    shortDescription: 'Production-grade UI with distinctive, polished design',
    fullDescription: 'Create distinctive, production-grade frontend interfaces with high design quality, avoiding generic AI aesthetics and delivering polished experiences.',
    category: 'Frontend Development',
    tags: ['design', 'frontend', 'ui', 'visual'],
    examplePrompts: [
      'Design a beautiful landing page',
      'Create a unique dashboard design',
      'Build a polished web application UI'
    ],
    relatedSkills: ['ui-ux-pro-max', 'design-systems', 'visual-design'],
    keywords: ['design', 'frontend', 'ui', 'visual']
  },
  {
    id: 'web-artifacts-builder',
    name: 'Web Artifacts Builder',
    shortDescription: 'Complex multi-component artifacts with React and shadcn/ui',
    fullDescription: 'Suite of tools for creating elaborate, multi-component artifacts using React, Tailwind CSS, and shadcn/ui with state management and routing.',
    category: 'Frontend Development',
    tags: ['react', 'components', 'shadcn', 'artifacts'],
    examplePrompts: [
      'Build a multi-page React artifact',
      'Create interactive components with shadcn/ui',
      'Design a complex web application'
    ],
    relatedSkills: ['react-patterns', 'component-library', 'state-management'],
    keywords: ['artifacts', 'components', 'shadcn', 'react']
  },
  {
    id: 'web-design-guidelines',
    name: 'Web Design Guidelines',
    shortDescription: 'Accessibility, UX best practices, and design review',
    fullDescription: 'Review UI code for Web Interface Guidelines compliance including accessibility, UX best practices, and responsive design standards.',
    category: 'Frontend Development',
    tags: ['design', 'accessibility', 'ux', 'guidelines'],
    examplePrompts: [
      'Review my UI for accessibility compliance',
      'Audit design against best practices',
      'Check responsive design implementation'
    ],
    relatedSkills: ['accessibility', 'ux-design', 'responsive-design'],
    keywords: ['design', 'guidelines', 'accessibility', 'ux']
  },
  {
    id: 'responsive-design',
    name: 'Responsive Web Design',
    shortDescription: 'Mobile-first design with breakpoints and adaptive layouts',
    fullDescription: 'Mobile-first responsive design patterns including breakpoint strategies, fluid layouts, and adaptive components for all screen sizes.',
    category: 'Frontend Development',
    tags: ['design', 'responsive', 'mobile', 'css'],
    examplePrompts: [
      'Create a mobile-first responsive layout',
      'Implement adaptive breakpoints',
      'Design for all screen sizes'
    ],
    relatedSkills: ['css-architecture', 'mobile-design', 'flexbox-grid'],
    keywords: ['responsive', 'mobile', 'breakpoints', 'adaptive']
  },
  {
    id: 'component-library',
    name: 'Component Library Design',
    shortDescription: 'Build reusable component systems with design tokens',
    fullDescription: 'Design and build reusable component libraries with design tokens, documentation, and consistent patterns for scalable UI systems.',
    category: 'Frontend Development',
    tags: ['components', 'library', 'design-system', 'reusability'],
    examplePrompts: [
      'Build a component library from scratch',
      'Create design tokens for components',
      'Document component API and usage'
    ],
    relatedSkills: ['design-systems', 'storybook', 'documentation'],
    keywords: ['components', 'library', 'design-tokens', 'reusable']
  },
  {
    id: 'performance-optimization',
    name: 'Frontend Performance Optimization',
    shortDescription: 'Bundle size, lazy loading, and web vitals optimization',
    fullDescription: 'Optimize frontend performance including bundle size reduction, code splitting, lazy loading, and Core Web Vitals improvements.',
    category: 'Frontend Development',
    tags: ['performance', 'optimization', 'web-vitals', 'speed'],
    examplePrompts: [
      'Optimize React app bundle size',
      'Improve Core Web Vitals scores',
      'Implement code splitting and lazy loading'
    ],
    relatedSkills: ['web-performance', 'lighthouse-optimization', 'code-splitting'],
    keywords: ['performance', 'optimization', 'bundle', 'speed']
  },
  {
    id: 'vercel-react-patterns',
    name: 'Vercel React Best Practices',
    shortDescription: 'React and Next.js performance from Vercel Engineering',
    fullDescription: 'React and Next.js performance optimization guidelines from Vercel Engineering for optimal rendering and bundle efficiency.',
    category: 'Frontend Development',
    tags: ['react', 'nextjs', 'vercel', 'performance'],
    examplePrompts: [
      'Follow Vercel React best practices',
      'Optimize Next.js for Vercel deployment',
      'Implement Vercel performance patterns'
    ],
    relatedSkills: ['nextjs-best-practices', 'performance-optimization', 'vercel-deployment'],
    keywords: ['vercel', 'react', 'nextjs', 'performance']
  },
  {
    id: 'd3-visualization',
    name: 'D3.js Data Visualization',
    shortDescription: 'Custom charts and interactive visualizations with D3',
    fullDescription: 'Create interactive data visualizations using D3.js including custom charts, network diagrams, and complex SVG-based visualizations.',
    category: 'Frontend Development',
    tags: ['visualization', 'd3', 'charts', 'data'],
    examplePrompts: [
      'Create a custom chart with D3.js',
      'Build an interactive network diagram',
      'Visualize data with D3 in React'
    ],
    relatedSkills: ['data-visualization', 'svg-manipulation', 'interactive-graphics'],
    keywords: ['d3', 'visualization', 'charts', 'data']
  },
  {
    id: 'scroll-experience',
    name: 'Scroll-Driven Experiences',
    shortDescription: 'Parallax, scroll animations, and cinematic web experiences',
    fullDescription: 'Build immersive scroll-driven experiences with parallax effects, scroll animations, and interactive narratives like NYT interactives.',
    category: 'Frontend Development',
    tags: ['animation', 'scroll', 'parallax', 'interactive'],
    examplePrompts: [
      'Create parallax scrolling effects',
      'Build scroll-driven animations',
      'Design cinematic web experience'
    ],
    relatedSkills: ['animation-patterns', 'interactive-design', 'storytelling'],
    keywords: ['scroll', 'parallax', 'animation', 'interactive']
  },
  {
    id: '3d-web-experience',
    name: '3D Web Experiences',
    shortDescription: 'Three.js, WebGL, and interactive 3D for the web',
    fullDescription: 'Build 3D experiences for the web using Three.js, React Three Fiber, and WebGL for immersive interactive 3D scenes.',
    category: 'Frontend Development',
    tags: ['3d', 'threejs', 'webgl', 'graphics'],
    examplePrompts: [
      'Create 3D product configurator',
      'Build interactive 3D scene with Three.js',
      'Implement WebGL graphics in React'
    ],
    relatedSkills: ['webgl', 'graphics-programming', 'interactive-3d'],
    keywords: ['3d', 'threejs', 'webgl', 'graphics']
  },
  {
    id: 'interactive-portfolio',
    name: 'Interactive Portfolio Builder',
    shortDescription: 'Portfolios that land jobs with memorable experiences',
    fullDescription: 'Build portfolios that actually land jobs and clients by creating memorable experiences showcasing work effectively for developers and designers.',
    category: 'Frontend Development',
    tags: ['portfolio', 'personal-site', 'showcase', 'career'],
    examplePrompts: [
      'Build a developer portfolio that stands out',
      'Create an interactive design portfolio',
      'Design portfolio site for freelancing'
    ],
    relatedSkills: ['personal-branding', 'showcase-design', 'career-development'],
    keywords: ['portfolio', 'showcase', 'personal', 'career']
  },
  {
    id: 'javascript-mastery',
    name: 'JavaScript Mastery',
    shortDescription: '33+ essential JS concepts from fundamentals to advanced',
    fullDescription: 'Comprehensive JavaScript reference covering primitives, closures, async/await, functional programming, and all essential concepts.',
    category: 'Frontend Development',
    tags: ['javascript', 'fundamentals', 'advanced', 'concepts'],
    examplePrompts: [
      'Explain JavaScript closures',
      'How does async/await work?',
      'Teach me functional programming in JS'
    ],
    relatedSkills: ['typescript-expert', 'programming-fundamentals', 'language-mastery'],
    keywords: ['javascript', 'fundamentals', 'async', 'closures']
  },
  {
    id: 'state-management',
    name: 'React State Management',
    shortDescription: 'Context, Redux, Zustand, and state management patterns',
    fullDescription: 'Modern state management patterns for React including Context API, Redux Toolkit, Zustand, and choosing the right solution.',
    category: 'Frontend Development',
    tags: ['react', 'state', 'redux', 'context'],
    examplePrompts: [
      'Implement global state with Context API',
      'Set up Redux Toolkit in React',
      'Choose state management solution'
    ],
    relatedSkills: ['react-patterns', 'architecture-patterns', 'data-flow'],
    keywords: ['state', 'redux', 'context', 'zustand']
  },
  {
    id: 'form-handling',
    name: 'Advanced Form Handling',
    shortDescription: 'React Hook Form, validation, and complex form patterns',
    fullDescription: 'Advanced form handling with React Hook Form, Zod validation, multi-step forms, and complex form patterns for production apps.',
    category: 'Frontend Development',
    tags: ['forms', 'validation', 'react', 'ux'],
    examplePrompts: [
      'Build forms with React Hook Form',
      'Implement Zod validation',
      'Create multi-step form wizard'
    ],
    relatedSkills: ['validation-patterns', 'ux-design', 'data-input'],
    keywords: ['forms', 'validation', 'react-hook-form', 'zod']
  },
  {
    id: 'accessibility-a11y',
    name: 'Web Accessibility (A11Y)',
    shortDescription: 'WCAG compliance, ARIA, and accessible web applications',
    fullDescription: 'Build accessible web applications with WCAG compliance, proper ARIA usage, keyboard navigation, and screen reader support.',
    category: 'Frontend Development',
    tags: ['accessibility', 'a11y', 'wcag', 'inclusive'],
    examplePrompts: [
      'Make this component accessible',
      'Implement ARIA labels correctly',
      'Test for WCAG AA compliance'
    ],
    relatedSkills: ['inclusive-design', 'semantic-html', 'keyboard-navigation'],
    keywords: ['accessibility', 'a11y', 'wcag', 'aria']
  },
  {
    id: 'pwa-development',
    name: 'Progressive Web Apps (PWA)',
    shortDescription: 'Service workers, offline support, and installable web apps',
    fullDescription: 'Build Progressive Web Apps with service workers, offline functionality, push notifications, and native-like experiences.',
    category: 'Frontend Development',
    tags: ['pwa', 'service-worker', 'offline', 'web-app'],
    examplePrompts: [
      'Create a PWA with offline support',
      'Implement service worker caching',
      'Make web app installable'
    ],
    relatedSkills: ['service-workers', 'caching-strategies', 'web-apis'],
    keywords: ['pwa', 'service-worker', 'offline', 'installable']
  },
  {
    id: 'seo-fundamentals',
    name: 'SEO Fundamentals',
    shortDescription: 'E-E-A-T, Core Web Vitals, and Google algorithm principles',
    fullDescription: 'SEO fundamentals including E-E-A-T principles, Core Web Vitals optimization, and understanding Google ranking algorithms.',
    category: 'Frontend Development',
    tags: ['seo', 'optimization', 'google', 'ranking'],
    examplePrompts: [
      'Optimize site for Core Web Vitals',
      'Implement E-E-A-T principles',
      'Improve Google search rankings'
    ],
    relatedSkills: ['performance-optimization', 'content-strategy', 'technical-seo'],
    keywords: ['seo', 'core-web-vitals', 'google', 'ranking']
  },
  {
    id: 'testing-patterns',
    name: 'Frontend Testing Patterns',
    shortDescription: 'Jest, React Testing Library, and TDD workflow',
    fullDescription: 'Frontend testing patterns with Jest, React Testing Library, factory functions, mocking strategies, and TDD red-green-refactor cycle.',
    category: 'Frontend Development',
    tags: ['testing', 'jest', 'tdd', 'quality'],
    examplePrompts: [
      'Write unit tests with Jest',
      'Test React components with RTL',
      'Follow TDD workflow for features'
    ],
    relatedSkills: ['test-driven-development', 'quality-assurance', 'automated-testing'],
    keywords: ['testing', 'jest', 'tdd', 'react-testing-library']
  },

  // AI & AGENTS (22 skills)
  {
    id: 'langgraph',
    name: 'LangGraph Agent Framework',
    shortDescription: 'Production-grade stateful AI agents with LangGraph',
    fullDescription: 'Build stateful, multi-actor AI applications with LangGraph including graph construction, state management, and the ReAct agent pattern.',
    category: 'AI & Agents',
    tags: ['ai', 'agents', 'langgraph', 'langchain'],
    examplePrompts: [
      'Build a LangGraph agent with state',
      'Implement ReAct pattern with LangGraph',
      'Create multi-agent system'
    ],
    relatedSkills: ['langchain', 'autonomous-agents', 'ai-architecture'],
    keywords: ['langgraph', 'agents', 'state', 'react']
  },
  {
    id: 'crewai',
    name: 'CrewAI Multi-Agent Teams',
    shortDescription: 'Role-based multi-agent framework for collaborative AI',
    fullDescription: 'Build collaborative AI agent teams with CrewAI using roles, goals, tasks, and orchestration for complex multi-agent workflows.',
    category: 'AI & Agents',
    tags: ['ai', 'agents', 'crewai', 'multi-agent'],
    examplePrompts: [
      'Create a CrewAI team of specialized agents',
      'Define agent roles and goals',
      'Orchestrate multi-agent workflows'
    ],
    relatedSkills: ['langgraph', 'agent-coordination', 'task-delegation'],
    keywords: ['crewai', 'multi-agent', 'roles', 'collaboration']
  },
  {
    id: 'rag-implementation',
    name: 'RAG Implementation',
    shortDescription: 'Retrieval-Augmented Generation with embeddings and vector stores',
    fullDescription: 'Implement RAG systems with chunking strategies, embeddings, vector stores, and retrieval optimization for LLM applications.',
    category: 'AI & Agents',
    tags: ['ai', 'rag', 'embeddings', 'vector-db'],
    examplePrompts: [
      'Build a RAG system for document Q&A',
      'Implement semantic search with embeddings',
      'Optimize retrieval for better context'
    ],
    relatedSkills: ['vector-databases', 'embeddings', 'semantic-search'],
    keywords: ['rag', 'retrieval', 'embeddings', 'vector']
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    shortDescription: 'Expert patterns and optimization for LLM prompts',
    fullDescription: 'Master prompt engineering patterns including few-shot learning, chain-of-thought, prompt optimization, and debugging agent behavior.',
    category: 'AI & Agents',
    tags: ['ai', 'prompts', 'llm', 'optimization'],
    examplePrompts: [
      'Optimize this prompt for better results',
      'Implement chain-of-thought reasoning',
      'Design few-shot learning examples'
    ],
    relatedSkills: ['llm-applications', 'prompt-design', 'ai-engineering'],
    keywords: ['prompts', 'engineering', 'llm', 'optimization']
  },
  {
    id: 'autonomous-agents',
    name: 'Autonomous Agents',
    shortDescription: 'Self-directing agents with planning and tool use',
    fullDescription: 'Build autonomous agents with goal decomposition, planning, tool execution, self-correction, and reliability patterns for production.',
    category: 'AI & Agents',
    tags: ['ai', 'agents', 'autonomous', 'planning'],
    examplePrompts: [
      'Build an autonomous coding agent',
      'Implement agent planning and reflection',
      'Create self-correcting agent loops'
    ],
    relatedSkills: ['agent-architecture', 'tool-use', 'reasoning-systems'],
    keywords: ['autonomous', 'agents', 'planning', 'tools']
  },
  {
    id: 'agent-tool-builder',
    name: 'AI Agent Tool Builder',
    shortDescription: 'Design tools for AI agents with proper schemas and errors',
    fullDescription: 'Build tools for AI agents with JSON Schema, description writing, validation, error handling, and MCP standard integration.',
    category: 'AI & Agents',
    tags: ['ai', 'tools', 'mcp', 'agents'],
    examplePrompts: [
      'Create tools for my AI agent',
      'Design MCP-compliant tool schemas',
      'Handle tool errors gracefully'
    ],
    relatedSkills: ['mcp-builder', 'schema-design', 'api-design'],
    keywords: ['tools', 'agents', 'mcp', 'schema']
  },
  {
    id: 'langfuse',
    name: 'Langfuse Observability',
    shortDescription: 'LLM observability, tracing, and prompt management',
    fullDescription: 'Monitor and debug LLM applications with Langfuse including tracing, prompt management, evaluation, and production monitoring.',
    category: 'AI & Agents',
    tags: ['ai', 'observability', 'langfuse', 'monitoring'],
    examplePrompts: [
      'Add Langfuse tracing to my LLM app',
      'Monitor LLM performance and costs',
      'Manage prompts with Langfuse'
    ],
    relatedSkills: ['llm-monitoring', 'debugging', 'production-ai'],
    keywords: ['langfuse', 'observability', 'tracing', 'monitoring']
  },
  {
    id: 'agent-memory-systems',
    name: 'Agent Memory Systems',
    shortDescription: 'Short-term, long-term, and cognitive memory architectures',
    fullDescription: 'Implement agent memory systems including short-term context, long-term vector storage, and cognitive architectures for intelligent recall.',
    category: 'AI & Agents',
    tags: ['ai', 'memory', 'agents', 'architecture'],
    examplePrompts: [
      'Add memory to my AI agent',
      'Implement long-term memory with vectors',
      'Design cognitive memory architecture'
    ],
    relatedSkills: ['vector-databases', 'state-management', 'cognitive-architecture'],
    keywords: ['memory', 'agents', 'recall', 'context']
  },
  {
    id: 'conversation-memory',
    name: 'Conversation Memory',
    shortDescription: 'Persistent memory for LLM conversations',
    fullDescription: 'Implement persistent conversation memory including short-term, long-term, and entity-based memory for continuous interactions.',
    category: 'AI & Agents',
    tags: ['ai', 'memory', 'conversation', 'persistence'],
    examplePrompts: [
      'Add conversation memory to chatbot',
      'Implement entity-based memory',
      'Persist chat history across sessions'
    ],
    relatedSkills: ['agent-memory-systems', 'chatbot-development', 'context-management'],
    keywords: ['conversation', 'memory', 'persistence', 'chat']
  },
  {
    id: 'context-window-management',
    name: 'Context Window Management',
    shortDescription: 'Manage LLM context limits with summarization and routing',
    fullDescription: 'Strategies for managing LLM context windows including summarization, trimming, routing, and avoiding context rot in long conversations.',
    category: 'AI & Agents',
    tags: ['ai', 'context', 'llm', 'optimization'],
    examplePrompts: [
      'Manage long conversations within token limits',
      'Implement context summarization',
      'Route messages to relevant context'
    ],
    relatedSkills: ['prompt-engineering', 'conversation-memory', 'token-optimization'],
    keywords: ['context', 'window', 'tokens', 'summarization']
  },
  {
    id: 'agent-evaluation',
    name: 'Agent Evaluation',
    shortDescription: 'Test and benchmark AI agents for reliability',
    fullDescription: 'Testing and benchmarking LLM agents including behavioral testing, capability assessment, and reliability metrics for production quality.',
    category: 'AI & Agents',
    tags: ['ai', 'testing', 'evaluation', 'quality'],
    examplePrompts: [
      'Evaluate my AI agent performance',
      'Benchmark agent against standards',
      'Test agent reliability and accuracy'
    ],
    relatedSkills: ['quality-assurance', 'benchmarking', 'testing-frameworks'],
    keywords: ['evaluation', 'testing', 'benchmarks', 'quality']
  },
  {
    id: 'llm-app-patterns',
    name: 'LLM Application Patterns',
    shortDescription: 'Production patterns for RAG, agents, and LLMOps',
    fullDescription: 'Production-ready patterns for building LLM applications including RAG pipelines, agent architectures, and LLMOps monitoring.',
    category: 'AI & Agents',
    tags: ['ai', 'llm', 'patterns', 'architecture'],
    examplePrompts: [
      'Design production LLM architecture',
      'Implement RAG pipeline patterns',
      'Set up LLMOps monitoring'
    ],
    relatedSkills: ['rag-implementation', 'production-ai', 'system-design'],
    keywords: ['llm', 'patterns', 'architecture', 'production']
  },
  {
    id: 'prompt-caching',
    name: 'Prompt Caching',
    shortDescription: 'Cache prompts and responses for cost and speed',
    fullDescription: 'Caching strategies for LLM prompts including Anthropic prompt caching, response caching, and CAG (Cache Augmented Generation).',
    category: 'AI & Agents',
    tags: ['ai', 'caching', 'optimization', 'performance'],
    examplePrompts: [
      'Implement prompt caching for cost savings',
      'Set up response caching strategy',
      'Use CAG for faster responses'
    ],
    relatedSkills: ['performance-optimization', 'cost-optimization', 'caching-strategies'],
    keywords: ['caching', 'prompts', 'optimization', 'cag']
  },
  {
    id: 'computer-use-agents',
    name: 'Computer Use Agents',
    shortDescription: 'AI agents that control screens, cursors, and keyboards',
    fullDescription: 'Build AI agents that interact with computers using screen viewing, cursor control, and keyboard input including Anthropic Computer Use API.',
    category: 'AI & Agents',
    tags: ['ai', 'automation', 'computer-use', 'vision'],
    examplePrompts: [
      'Build agent that controls desktop',
      'Implement screen-based automation',
      'Use Anthropic Computer Use API'
    ],
    relatedSkills: ['browser-automation', 'vision-ai', 'desktop-automation'],
    keywords: ['computer-use', 'automation', 'screen', 'control']
  },
  {
    id: 'voice-ai-development',
    name: 'Voice AI Development',
    shortDescription: 'Real-time voice agents and speech applications',
    fullDescription: 'Build voice AI applications using OpenAI Realtime API, Deepgram, ElevenLabs, and LiveKit for low-latency voice experiences.',
    category: 'AI & Agents',
    tags: ['ai', 'voice', 'speech', 'realtime'],
    examplePrompts: [
      'Build real-time voice agent',
      'Implement speech-to-text with Deepgram',
      'Create voice-enabled application'
    ],
    relatedSkills: ['speech-processing', 'realtime-systems', 'audio-engineering'],
    keywords: ['voice', 'speech', 'realtime', 'audio']
  },
  {
    id: 'voice-agents',
    name: 'Voice Agents',
    shortDescription: 'Natural conversation with sub-800ms latency',
    fullDescription: 'Build voice agents with natural conversation flow, sub-800ms latency, interruption handling, and emotional nuance using speech-to-speech architecture.',
    category: 'AI & Agents',
    tags: ['ai', 'voice', 'agents', 'conversation'],
    examplePrompts: [
      'Create voice agent with low latency',
      'Handle interruptions in voice conversation',
      'Build speech-to-speech agent'
    ],
    relatedSkills: ['voice-ai-development', 'conversation-design', 'latency-optimization'],
    keywords: ['voice', 'agents', 'conversation', 'latency']
  },
  {
    id: 'mcp-builder',
    name: 'MCP Server Builder',
    shortDescription: 'Build Model Context Protocol servers for LLM tools',
    fullDescription: 'Create high-quality MCP servers to enable LLMs to interact with external services through well-designed tools in Python or TypeScript.',
    category: 'AI & Agents',
    tags: ['ai', 'mcp', 'protocol', 'tools'],
    examplePrompts: [
      'Build MCP server for my API',
      'Create FastMCP tools in Python',
      'Integrate external service with MCP'
    ],
    relatedSkills: ['agent-tool-builder', 'api-integration', 'protocol-design'],
    keywords: ['mcp', 'protocol', 'server', 'tools']
  },
  {
    id: 'ai-wrapper-product',
    name: 'AI Wrapper Products',
    shortDescription: 'Build focused products wrapping AI APIs',
    fullDescription: 'Build products that wrap AI APIs into focused tools people will pay for, with cost management, rate limiting, and defensible features.',
    category: 'AI & Agents',
    tags: ['ai', 'product', 'saas', 'business'],
    examplePrompts: [
      'Build AI wrapper product for specific use case',
      'Manage AI API costs effectively',
      'Create defensible AI SaaS product'
    ],
    relatedSkills: ['product-development', 'cost-optimization', 'saas-architecture'],
    keywords: ['ai-wrapper', 'product', 'saas', 'business']
  },
  {
    id: 'ai-agents-architect',
    name: 'AI Agents Architect',
    shortDescription: 'Design autonomous AI agents with tool use and planning',
    fullDescription: 'Expert in designing and building autonomous AI agents with tool use, memory systems, planning strategies, and multi-agent orchestration.',
    category: 'AI & Agents',
    tags: ['ai', 'agents', 'architecture', 'design'],
    examplePrompts: [
      'Design architecture for AI agent system',
      'Plan multi-agent orchestration',
      'Implement agent tool use patterns'
    ],
    relatedSkills: ['system-architecture', 'autonomous-agents', 'agent-coordination'],
    keywords: ['architecture', 'agents', 'design', 'orchestration']
  },
  {
    id: 'rag-engineer',
    name: 'RAG Engineer',
    shortDescription: 'Expert in embeddings, vector DBs, and retrieval optimization',
    fullDescription: 'Master embedding models, vector databases, chunking strategies, and retrieval optimization for production RAG systems.',
    category: 'AI & Agents',
    tags: ['ai', 'rag', 'embeddings', 'retrieval'],
    examplePrompts: [
      'Optimize RAG retrieval quality',
      'Choose best embedding model',
      'Design chunking strategy for documents'
    ],
    relatedSkills: ['rag-implementation', 'vector-databases', 'information-retrieval'],
    keywords: ['rag', 'embeddings', 'retrieval', 'optimization']
  },
  {
    id: 'prompt-engineer',
    name: 'Prompt Engineer',
    shortDescription: 'Design effective prompts for LLM applications',
    fullDescription: 'Expert in designing effective prompts for LLM-powered applications including prompt structure, context management, and output formatting.',
    category: 'AI & Agents',
    tags: ['ai', 'prompts', 'llm', 'engineering'],
    examplePrompts: [
      'Design system prompt for chatbot',
      'Optimize few-shot examples',
      'Structure prompts for consistent output'
    ],
    relatedSkills: ['prompt-engineering', 'llm-applications', 'ai-engineering'],
    keywords: ['prompts', 'engineering', 'llm', 'design']
  },
  {
    id: 'ai-product',
    name: 'AI Product Development',
    shortDescription: 'LLM integration, RAG, and production AI applications',
    fullDescription: 'Build AI-powered products with LLM integration patterns, RAG architecture, cost optimization, and production-ready AI UX.',
    category: 'AI & Agents',
    tags: ['ai', 'product', 'development', 'production'],
    examplePrompts: [
      'Build AI-powered product feature',
      'Integrate LLM into existing app',
      'Optimize AI product costs'
    ],
    relatedSkills: ['product-development', 'llm-integration', 'production-engineering'],
    keywords: ['ai', 'product', 'development', 'integration']
  },

  // BACKEND & APIS (20 skills)
  {
    id: 'nodejs-best-practices',
    name: 'Node.js Best Practices',
    shortDescription: 'Framework selection, async patterns, and architecture',
    fullDescription: 'Node.js development principles including framework selection, async patterns, security best practices, and scalable architecture.',
    category: 'Backend & APIs',
    tags: ['nodejs', 'backend', 'javascript', 'server'],
    examplePrompts: [
      'Design Node.js API architecture',
      'Handle async operations properly',
      'Secure Node.js application'
    ],
    relatedSkills: ['express-framework', 'async-programming', 'backend-security'],
    keywords: ['nodejs', 'backend', 'async', 'architecture']
  },
  {
    id: 'api-patterns',
    name: 'API Design Patterns',
    shortDescription: 'REST vs GraphQL vs tRPC, versioning, and pagination',
    fullDescription: 'API design principles including REST vs GraphQL vs tRPC selection, response formats, versioning strategies, and pagination patterns.',
    category: 'Backend & APIs',
    tags: ['api', 'rest', 'graphql', 'design'],
    examplePrompts: [
      'Design RESTful API structure',
      'Choose between REST and GraphQL',
      'Implement API versioning strategy'
    ],
    relatedSkills: ['rest-api', 'graphql', 'api-architecture'],
    keywords: ['api', 'rest', 'graphql', 'design']
  },
  {
    id: 'graphql',
    name: 'GraphQL API Development',
    shortDescription: 'Schema design, resolvers, and federation',
    fullDescription: 'GraphQL development including schema design, resolver patterns, DataLoader for N+1 prevention, federation, and client integration.',
    category: 'Backend & APIs',
    tags: ['graphql', 'api', 'schema', 'resolvers'],
    examplePrompts: [
      'Build GraphQL API from scratch',
      'Prevent N+1 queries with DataLoader',
      'Implement GraphQL federation'
    ],
    relatedSkills: ['api-patterns', 'schema-design', 'data-fetching'],
    keywords: ['graphql', 'schema', 'resolvers', 'federation']
  },
  {
    id: 'prisma-expert',
    name: 'Prisma ORM Expert',
    shortDescription: 'Schema design, migrations, and query optimization',
    fullDescription: 'Prisma ORM expertise including schema design, migration strategies, query optimization, relations modeling, and database operations.',
    category: 'Backend & APIs',
    tags: ['prisma', 'orm', 'database', 'typescript'],
    examplePrompts: [
      'Design Prisma schema for my app',
      'Optimize Prisma queries',
      'Handle database migrations with Prisma'
    ],
    relatedSkills: ['database-design', 'orm-patterns', 'typescript-expert'],
    keywords: ['prisma', 'orm', 'database', 'migrations']
  },
  {
    id: 'nestjs-expert',
    name: 'NestJS Framework Expert',
    shortDescription: 'Module architecture, DI, guards, and testing',
    fullDescription: 'NestJS framework expertise including module architecture, dependency injection, middleware, guards, interceptors, and comprehensive testing.',
    category: 'Backend & APIs',
    tags: ['nestjs', 'typescript', 'backend', 'framework'],
    examplePrompts: [
      'Build NestJS application architecture',
      'Implement dependency injection in NestJS',
      'Create guards and interceptors'
    ],
    relatedSkills: ['typescript-expert', 'backend-architecture', 'testing-patterns'],
    keywords: ['nestjs', 'dependency-injection', 'modules', 'guards']
  },
  {
    id: 'database-design',
    name: 'Database Design',
    shortDescription: 'Schema design, indexing, and ORM selection',
    fullDescription: 'Database design principles including schema design, indexing strategy, ORM selection, normalization, and serverless databases.',
    category: 'Backend & APIs',
    tags: ['database', 'sql', 'design', 'architecture'],
    examplePrompts: [
      'Design database schema for my app',
      'Optimize database with indexes',
      'Choose between SQL and NoSQL'
    ],
    relatedSkills: ['sql-optimization', 'schema-design', 'data-modeling'],
    keywords: ['database', 'schema', 'design', 'indexing']
  },
  {
    id: 'neon-postgres',
    name: 'Neon Serverless Postgres',
    shortDescription: 'Serverless Postgres with branching and connection pooling',
    fullDescription: 'Expert patterns for Neon serverless Postgres including database branching, connection pooling, and Prisma/Drizzle integration.',
    category: 'Backend & APIs',
    tags: ['database', 'postgres', 'serverless', 'neon'],
    examplePrompts: [
      'Set up Neon serverless Postgres',
      'Use database branching for development',
      'Configure connection pooling'
    ],
    relatedSkills: ['postgres', 'serverless-architecture', 'database-design'],
    keywords: ['neon', 'postgres', 'serverless', 'branching']
  },
  {
    id: 'authentication-systems',
    name: 'Authentication Systems',
    shortDescription: 'JWT, OAuth, session management, and security',
    fullDescription: 'Build secure authentication systems with JWT, OAuth 2.0, session management, password hashing, and multi-factor authentication.',
    category: 'Backend & APIs',
    tags: ['auth', 'security', 'jwt', 'oauth'],
    examplePrompts: [
      'Implement JWT authentication',
      'Set up OAuth 2.0 flow',
      'Add multi-factor authentication'
    ],
    relatedSkills: ['security-patterns', 'session-management', 'encryption'],
    keywords: ['authentication', 'jwt', 'oauth', 'security']
  },
  {
    id: 'clerk-auth',
    name: 'Clerk Authentication',
    shortDescription: 'Clerk auth with middleware, organizations, and webhooks',
    fullDescription: 'Expert patterns for Clerk authentication implementation including middleware, organizations, user management, and webhook synchronization.',
    category: 'Backend & APIs',
    tags: ['auth', 'clerk', 'saas', 'users'],
    examplePrompts: [
      'Integrate Clerk auth in Next.js',
      'Set up Clerk organizations',
      'Sync users with Clerk webhooks'
    ],
    relatedSkills: ['authentication-systems', 'nextjs-best-practices', 'user-management'],
    keywords: ['clerk', 'authentication', 'organizations', 'webhooks']
  },
  {
    id: 'stripe-integration',
    name: 'Stripe Integration',
    shortDescription: 'Payments, subscriptions, webhooks, and billing',
    fullDescription: 'Complete Stripe integration including payments, subscriptions, billing portal, webhooks, metered billing, and Stripe Connect.',
    category: 'Backend & APIs',
    tags: ['payments', 'stripe', 'billing', 'saas'],
    examplePrompts: [
      'Implement Stripe checkout',
      'Set up subscription billing',
      'Handle Stripe webhooks securely'
    ],
    relatedSkills: ['payment-processing', 'webhook-handling', 'subscription-management'],
    keywords: ['stripe', 'payments', 'subscriptions', 'webhooks']
  },
  {
    id: 'file-uploads',
    name: 'File Uploads & Cloud Storage',
    shortDescription: 'S3, R2, presigned URLs, and multipart uploads',
    fullDescription: 'Handle file uploads with S3, Cloudflare R2, presigned URLs, multipart uploads, and image optimization without blocking.',
    category: 'Backend & APIs',
    tags: ['files', 'storage', 's3', 'uploads'],
    examplePrompts: [
      'Implement file uploads to S3',
      'Use presigned URLs for uploads',
      'Handle large file multipart uploads'
    ],
    relatedSkills: ['cloud-storage', 'image-optimization', 'async-processing'],
    keywords: ['uploads', 's3', 'storage', 'presigned']
  },
  {
    id: 'email-systems',
    name: 'Email Systems',
    shortDescription: 'Transactional email, automation, and deliverability',
    fullDescription: 'Email systems including transactional email, marketing automation, deliverability optimization, and infrastructure that scales.',
    category: 'Backend & APIs',
    tags: ['email', 'automation', 'deliverability', 'marketing'],
    examplePrompts: [
      'Set up transactional email system',
      'Improve email deliverability',
      'Build email marketing automation'
    ],
    relatedSkills: ['email-marketing', 'automation', 'infrastructure'],
    keywords: ['email', 'transactional', 'deliverability', 'automation']
  },
  {
    id: 'webhook-handling',
    name: 'Webhook Handling',
    shortDescription: 'Secure webhook processing and retry logic',
    fullDescription: 'Build secure webhook endpoints with signature verification, idempotency, retry logic, and reliable event processing.',
    category: 'Backend & APIs',
    tags: ['webhooks', 'events', 'integration', 'security'],
    examplePrompts: [
      'Build secure webhook endpoint',
      'Verify webhook signatures',
      'Implement webhook retry logic'
    ],
    relatedSkills: ['event-processing', 'security-patterns', 'async-processing'],
    keywords: ['webhooks', 'events', 'signatures', 'retry']
  },
  {
    id: 'background-jobs',
    name: 'Background Job Processing',
    shortDescription: 'Job queues, workers, and async task processing',
    fullDescription: 'Background job processing with Redis queues, worker patterns, retry strategies, and reliable async task execution.',
    category: 'Backend & APIs',
    tags: ['jobs', 'queues', 'async', 'workers'],
    examplePrompts: [
      'Set up job queue with BullMQ',
      'Process background tasks reliably',
      'Implement job retry strategies'
    ],
    relatedSkills: ['bullmq-specialist', 'redis', 'async-architecture'],
    keywords: ['jobs', 'queues', 'background', 'workers']
  },
  {
    id: 'bullmq-specialist',
    name: 'BullMQ Specialist',
    shortDescription: 'Redis-backed job queues for Node.js',
    fullDescription: 'BullMQ expert for Redis-backed job queues, background processing, and reliable async execution in Node.js/TypeScript applications.',
    category: 'Backend & APIs',
    tags: ['bullmq', 'redis', 'queues', 'jobs'],
    examplePrompts: [
      'Create BullMQ job queue',
      'Handle job failures and retries',
      'Monitor job queue performance'
    ],
    relatedSkills: ['background-jobs', 'redis', 'queue-patterns'],
    keywords: ['bullmq', 'redis', 'queue', 'jobs']
  },
  {
    id: 'caching-strategies',
    name: 'Caching Strategies',
    shortDescription: 'Redis, in-memory caching, and cache invalidation',
    fullDescription: 'Implement effective caching with Redis, in-memory caching, cache invalidation strategies, and performance optimization.',
    category: 'Backend & APIs',
    tags: ['caching', 'redis', 'performance', 'optimization'],
    examplePrompts: [
      'Implement Redis caching strategy',
      'Handle cache invalidation',
      'Optimize API with caching'
    ],
    relatedSkills: ['redis', 'performance-optimization', 'data-layer'],
    keywords: ['caching', 'redis', 'invalidation', 'performance']
  },
  {
    id: 'rate-limiting',
    name: 'Rate Limiting & Throttling',
    shortDescription: 'Protect APIs with rate limits and abuse prevention',
    fullDescription: 'Implement rate limiting and throttling to protect APIs from abuse, manage quotas, and ensure fair resource usage.',
    category: 'Backend & APIs',
    tags: ['security', 'api', 'rate-limiting', 'protection'],
    examplePrompts: [
      'Add rate limiting to API endpoints',
      'Implement sliding window rate limiter',
      'Prevent API abuse with throttling'
    ],
    relatedSkills: ['api-security', 'redis', 'abuse-prevention'],
    keywords: ['rate-limiting', 'throttling', 'quotas', 'protection']
  },
  {
    id: 'api-security',
    name: 'API Security',
    shortDescription: 'CORS, CSRF, input validation, and API hardening',
    fullDescription: 'Secure APIs with CORS configuration, CSRF protection, input validation, SQL injection prevention, and comprehensive API hardening.',
    category: 'Backend & APIs',
    tags: ['security', 'api', 'validation', 'protection'],
    examplePrompts: [
      'Secure my API endpoints',
      'Implement input validation',
      'Configure CORS properly'
    ],
    relatedSkills: ['security-patterns', 'validation', 'attack-prevention'],
    keywords: ['security', 'api', 'validation', 'cors']
  },
  {
    id: 'microservices',
    name: 'Microservices Architecture',
    shortDescription: 'Service decomposition, communication, and orchestration',
    fullDescription: 'Design microservices architecture with service decomposition, inter-service communication, API gateways, and service orchestration.',
    category: 'Backend & APIs',
    tags: ['architecture', 'microservices', 'distributed', 'systems'],
    examplePrompts: [
      'Design microservices architecture',
      'Implement service-to-service communication',
      'Set up API gateway'
    ],
    relatedSkills: ['distributed-systems', 'api-gateway', 'service-mesh'],
    keywords: ['microservices', 'architecture', 'distributed', 'services']
  },
  {
    id: 'docker-expert',
    name: 'Docker Expert',
    shortDescription: 'Multi-stage builds, optimization, and security',
    fullDescription: 'Docker containerization expert with multi-stage builds, image optimization, container security, and production deployment patterns.',
    category: 'Backend & APIs',
    tags: ['docker', 'containers', 'devops', 'deployment'],
    examplePrompts: [
      'Create optimized Dockerfile',
      'Implement multi-stage Docker builds',
      'Secure Docker containers'
    ],
    relatedSkills: ['containerization', 'devops', 'deployment'],
    keywords: ['docker', 'containers', 'dockerfile', 'optimization']
  },

  // DEVOPS & CLOUD (15 skills) - continuing...
  {
    id: 'aws-serverless',
    name: 'AWS Serverless',
    shortDescription: 'Lambda, API Gateway, DynamoDB, and SAM/CDK',
    fullDescription: 'Build production-ready serverless applications on AWS with Lambda, API Gateway, DynamoDB, event-driven patterns, and infrastructure as code.',
    category: 'DevOps & Cloud',
    tags: ['aws', 'serverless', 'lambda', 'cloud'],
    examplePrompts: [
      'Build serverless API with AWS Lambda',
      'Deploy with AWS SAM or CDK',
      'Implement event-driven architecture'
    ],
    relatedSkills: ['cloud-architecture', 'serverless-patterns', 'iac'],
    keywords: ['aws', 'serverless', 'lambda', 'api-gateway']
  },
  {
    id: 'vercel-deployment',
    name: 'Vercel Deployment',
    shortDescription: 'Deploy Next.js to Vercel with optimal configuration',
    fullDescription: 'Expert knowledge for deploying to Vercel with Next.js including environment variables, edge functions, and production optimization.',
    category: 'DevOps & Cloud',
    tags: ['vercel', 'deployment', 'nextjs', 'hosting'],
    examplePrompts: [
      'Deploy Next.js app to Vercel',
      'Configure Vercel environment variables',
      'Optimize Vercel deployment'
    ],
    relatedSkills: ['nextjs-best-practices', 'deployment-automation', 'edge-functions'],
    keywords: ['vercel', 'deployment', 'nextjs', 'hosting']
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions CI/CD',
    shortDescription: 'Automated workflows, testing, and deployment',
    fullDescription: 'Build CI/CD pipelines with GitHub Actions including automated testing, deployment workflows, and release automation.',
    category: 'DevOps & Cloud',
    tags: ['ci-cd', 'automation', 'github', 'deployment'],
    examplePrompts: [
      'Create GitHub Actions workflow',
      'Automate testing with GitHub Actions',
      'Deploy with GitHub Actions'
    ],
    relatedSkills: ['ci-cd-patterns', 'deployment-automation', 'workflow-automation'],
    keywords: ['github-actions', 'ci-cd', 'automation', 'deployment']
  },
  {
    id: 'deployment-procedures',
    name: 'Deployment Procedures',
    shortDescription: 'Safe deployment workflows and rollback strategies',
    fullDescription: 'Production deployment principles including safe deployment workflows, rollback strategies, blue-green deployments, and verification.',
    category: 'DevOps & Cloud',
    tags: ['deployment', 'devops', 'production', 'safety'],
    examplePrompts: [
      'Design safe deployment strategy',
      'Implement rollback procedures',
      'Set up blue-green deployment'
    ],
    relatedSkills: ['release-management', 'production-safety', 'monitoring'],
    keywords: ['deployment', 'rollback', 'blue-green', 'safety']
  },

  // MARKETING & GROWTH (18 skills)
  {
    id: 'seo-audit',
    name: 'SEO Audit',
    shortDescription: 'Technical SEO, on-page optimization, and diagnostics',
    fullDescription: 'Comprehensive SEO audit including technical SEO, on-page optimization, meta tags, structured data, and diagnostic tools.',
    category: 'Marketing & Growth',
    tags: ['seo', 'marketing', 'optimization', 'audit'],
    examplePrompts: [
      'Audit my site for SEO issues',
      'Review technical SEO implementation',
      'Optimize meta tags and structure'
    ],
    relatedSkills: ['seo-fundamentals', 'technical-seo', 'content-optimization'],
    keywords: ['seo', 'audit', 'optimization', 'technical']
  },
  {
    id: 'copywriting',
    name: 'Copywriting',
    shortDescription: 'Marketing copy for pages, products, and campaigns',
    fullDescription: 'Write and improve marketing copy for homepages, landing pages, feature pages, and product pages with conversion focus.',
    category: 'Marketing & Growth',
    tags: ['copywriting', 'marketing', 'content', 'conversion'],
    examplePrompts: [
      'Write compelling homepage copy',
      'Improve landing page headlines',
      'Create product page copy'
    ],
    relatedSkills: ['content-strategy', 'conversion-optimization', 'messaging'],
    keywords: ['copywriting', 'marketing', 'copy', 'content']
  },
  {
    id: 'page-cro',
    name: 'Page Conversion Optimization',
    shortDescription: 'CRO for landing pages, pricing, and marketing pages',
    fullDescription: 'Optimize conversion rates on marketing pages including landing pages, pricing pages, and feature pages with proven CRO techniques.',
    category: 'Marketing & Growth',
    tags: ['cro', 'conversion', 'optimization', 'marketing'],
    examplePrompts: [
      'Optimize landing page conversion',
      'Improve pricing page performance',
      'Increase homepage conversions'
    ],
    relatedSkills: ['ab-testing', 'user-research', 'analytics'],
    keywords: ['cro', 'conversion', 'optimization', 'landing-page']
  },

  // MOBILE DEVELOPMENT (8 skills)
  {
    id: 'mobile-design',
    name: 'Mobile Design',
    shortDescription: 'Touch interactions, platform conventions, and mobile UX',
    fullDescription: 'Mobile-first design thinking for iOS and Android apps including touch interactions, performance patterns, and platform conventions.',
    category: 'Mobile Development',
    tags: ['mobile', 'design', 'ux', 'native'],
    examplePrompts: [
      'Design mobile-first user interface',
      'Implement platform-specific patterns',
      'Optimize touch interactions'
    ],
    relatedSkills: ['responsive-design', 'ux-design', 'native-patterns'],
    keywords: ['mobile', 'design', 'ux', 'touch']
  },

  // PRODUCTIVITY & PLANNING (12 skills)
  {
    id: 'test-driven-development',
    name: 'Test-Driven Development',
    shortDescription: 'TDD workflow with red-green-refactor cycle',
    fullDescription: 'Implement features using test-driven development including red-green-refactor cycle and writing tests before implementation.',
    category: 'Productivity & Planning',
    tags: ['tdd', 'testing', 'quality', 'workflow'],
    examplePrompts: [
      'Follow TDD workflow for new feature',
      'Write tests before implementation',
      'Refactor code with test coverage'
    ],
    relatedSkills: ['testing-patterns', 'quality-assurance', 'refactoring'],
    keywords: ['tdd', 'testing', 'red-green-refactor', 'quality']
  },
  {
    id: 'planning-with-files',
    name: 'File-Based Planning',
    shortDescription: 'Manus-style planning with task plans and progress tracking',
    fullDescription: 'Implement file-based planning for complex tasks using task_plan.md, findings.md, and progress.md for structured work.',
    category: 'Productivity & Planning',
    tags: ['planning', 'productivity', 'workflow', 'organization'],
    examplePrompts: [
      'Create structured task plan',
      'Track progress on complex feature',
      'Document findings during implementation'
    ],
    relatedSkills: ['project-planning', 'documentation', 'task-management'],
    keywords: ['planning', 'tasks', 'progress', 'documentation']
  },
  {
    id: 'systematic-debugging',
    name: 'Systematic Debugging',
    shortDescription: 'Methodical debugging before proposing fixes',
    fullDescription: 'Systematic debugging methodology for identifying root causes, gathering evidence, and proposing targeted fixes.',
    category: 'Productivity & Planning',
    tags: ['debugging', 'troubleshooting', 'methodology', 'quality'],
    examplePrompts: [
      'Debug this issue systematically',
      'Find root cause of bug',
      'Investigate test failure'
    ],
    relatedSkills: ['problem-solving', 'root-cause-analysis', 'testing'],
    keywords: ['debugging', 'troubleshooting', 'root-cause', 'investigation']
  },

  // GAME DEVELOPMENT (10 skills)
  {
    id: '2d-games',
    name: '2D Game Development',
    shortDescription: 'Sprites, tilemaps, physics, and 2D game patterns',
    fullDescription: '2D game development principles including sprite management, tilemap systems, 2D physics, and camera controls.',
    category: 'Game Development',
    tags: ['game-dev', '2d', 'sprites', 'physics'],
    examplePrompts: [
      'Build 2D platformer game',
      'Implement sprite animations',
      'Create tilemap-based levels'
    ],
    relatedSkills: ['game-design', 'physics-systems', 'animation'],
    keywords: ['2d', 'games', 'sprites', 'tilemap']
  },
  {
    id: '3d-games',
    name: '3D Game Development',
    shortDescription: 'Rendering, shaders, physics, and 3D cameras',
    fullDescription: '3D game development principles including rendering pipelines, shader programming, 3D physics, and camera systems.',
    category: 'Game Development',
    tags: ['game-dev', '3d', 'rendering', 'shaders'],
    examplePrompts: [
      'Build 3D game with Unity',
      'Implement custom shaders',
      'Set up 3D physics system'
    ],
    relatedSkills: ['game-design', 'graphics-programming', '3d-math'],
    keywords: ['3d', 'games', 'rendering', 'shaders']
  }
];
