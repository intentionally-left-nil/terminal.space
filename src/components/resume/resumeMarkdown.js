import resumeData from './resumeData';

const printSkills = (skills) => {
  const strings = skills.map((skillRow) => skillRow.join(' | ').trim())
    .map((skillset) => `- ${skillset}`);
  return strings.join('\n');
};

const printJobs = (jobs) => jobs.map(({
  company, role, start, end = 'Present', highlights,
}) => `**${role}, ${company}**
    ${start} - ${end}
    ${highlights.map((highlight) => `- ${highlight}`).join('\n')}

    `).join('\n');

const printCommunities = (communities) => communities.map(({ name, role }) => (`**${name}** - ${role}`)).join('\n');

const markdown = `\
# ${resumeData.name}
${resumeData.intro}

## Contact
- Phone: ${resumeData.contact.phone}
- Email: ${resumeData.contact.email}
- Github: ${resumeData.contact.github}

## Expertise
${printSkills(resumeData.skills)}

## Professional Experience
${printJobs(resumeData.jobs)}

## Community
${printCommunities(resumeData.communities)}

## Education
**${resumeData.education.name}** ${resumeData.education.start} - ${resumeData.education.end}

${resumeData.education.degree}`;

export default markdown;
