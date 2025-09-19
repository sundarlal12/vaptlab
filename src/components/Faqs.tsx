import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

/* Inline chevron so no @mui/icons-material needed */
function ExpandChevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="currentColor" />
    </svg>
  );
}

const faqItems = [
  {
    q: 'How often should we perform web application security testing?',
    a: 'Regular testing is essential — at least quarterly for internet-facing applications, and after major releases or infrastructure changes.',
  },
  {
    q: 'What are the main areas evaluated during a security test?',
    a: 'A full test covers confidentiality, integrity, authentication, authorization, and availability. Checks include input validation, session management, access control, and component vulnerabilities.',
  },
  {
    q: 'How long does a VAPT engagement usually take?',
    a: 'Small applications may take a few days, while large enterprise environments can require several weeks depending on scope and complexity.',
  },
  {
    q: 'What does effective security depend on?',
    a: 'Strong security relies on asset discovery, threat detection, and controls that enforce protections across dynamic environments.',
  },
  {
    q: 'What is vulnerability scanning?',
    a: 'Automated scanning identifies known weaknesses and suggests fixes. It should be paired with manual testing for accurate risk validation.',
  },
  {
    q: 'What is web application scanning?',
    a: 'Web scanners crawl and probe applications to find common issues. They map the site structure and highlight areas needing manual review.',
  },
];

export default function Faqs() {
  const [expanded, setExpanded] = useState<number | false>(0); // first open by default

  const handleChange = (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="faqs" component="section" py={10} bgcolor="background.paper">
      <Container maxWidth="lg">
        <Box id="overview" mb={6} textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom>
            FAQs
          </Typography>
          <Typography variant="body1" color="textSecondary" maxWidth={800} mx="auto">
            Answers to common questions about our web application penetration testing process,
            scheduling, and deliverables.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            {faqItems.map((item, idx) => (
              <Accordion
                key={idx}
                expanded={expanded === idx}
                onChange={handleChange(idx)}
                sx={{
                  borderRadius: 2,
                  mb: 2,
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandChevron style={{ color: 'rgba(0,0,0,0.6)' }} />}
                  aria-controls={`panel${idx}-content`}
                  id={`panel${idx}-header`}
                >
                  <Typography variant="h6">{item.q}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>


        </Grid>
      </Container>
    </Box>
  );
}