import React from 'react';
import { Document, Page, View, Text, StyleSheet, Link } from '@react-pdf/renderer';
import { listTools, listCertifications, listProyek } from '../../data';

const colors = {
  bg: '#0f0f0f',
  surface: '#1a1a1a',
  border: '#2a2a2a',
  violet: '#8B5CF6',
  violetLight: '#A78BFA',
  white: '#ffffff',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg,
    padding: 40,
    fontFamily: 'Helvetica',
    color: colors.white,
  },
  // Header
  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.violet,
    borderBottomStyle: 'solid',
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: colors.white,
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontSize: 13,
    color: colors.violetLight,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  contactItem: {
    fontSize: 9,
    color: colors.gray400,
  },
  contactLink: {
    fontSize: 9,
    color: colors.violetLight,
    textDecoration: 'none',
  },
  separator: {
    fontSize: 9,
    color: colors.gray500,
    marginHorizontal: 4,
  },
  // Section
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: colors.violet,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
    borderBottomStyle: 'solid',
  },
  // About
  aboutText: {
    fontSize: 10,
    color: colors.gray300,
    lineHeight: 1.6,
  },
  // Tools grid
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  toolChip: {
    backgroundColor: colors.surface,
    borderWidth: 0.5,
    borderColor: colors.border,
    borderStyle: 'solid',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  toolName: {
    fontSize: 9,
    color: colors.white,
    fontFamily: 'Helvetica-Bold',
  },
  toolKet: {
    fontSize: 8,
    color: colors.gray500,
  },
  // Certifications
  certRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: colors.surface,
    borderRadius: 4,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: colors.border,
    borderStyle: 'solid',
  },
  certLeft: {
    flex: 1,
  },
  certName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.white,
    marginBottom: 2,
  },
  certKet: {
    fontSize: 9,
    color: colors.gray400,
  },
  certAnno: {
    fontSize: 10,
    color: colors.violetLight,
    fontFamily: 'Helvetica-Bold',
  },
  // Projects
  projectRow: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: colors.surface,
    borderRadius: 4,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: colors.border,
    borderStyle: 'solid',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  projectTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.white,
  },
  projectAnno: {
    fontSize: 9,
    color: colors.violetLight,
  },
  projectSubtitle: {
    fontSize: 9,
    color: colors.gray400,
    lineHeight: 1.4,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
    borderTopStyle: 'solid',
    paddingTop: 8,
  },
  footerText: {
    fontSize: 8,
    color: colors.gray500,
  },
});

const doneTools = listTools.filter(t => t.done);
const acquiredCerts = listCertifications
  .filter(c => c.certImage !== null)
  .sort((a, b) => Number(b.anno) - Number(a.anno));

export const CVDocument = () => (
  <Document title="Alessio Gervasini — CV" author="Alessio Gervasini">
    <Page size="A4" style={styles.page}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>Alessio Gervasini</Text>
        <Text style={styles.title}>Machine Learning Specialist · AI &amp; Cybersecurity</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>agervasini1@gmail.com</Text>
          <Text style={styles.separator}>·</Text>
          <Text style={styles.contactItem}>+39 348 347 6847</Text>
          <Text style={styles.separator}>·</Text>
          <Link src="https://github.com/Alex111145" style={styles.contactLink}>github.com/Alex111145</Link>
          <Text style={styles.separator}>·</Text>
          <Link src="https://www.linkedin.com/in/891740368" style={styles.contactLink}>linkedin.com/in/891740368</Link>
        </View>
      </View>

      {/* ABOUT */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          Bachelor's degree in Computer Science from the University of Insubria, with a focus on Artificial Intelligence, Machine Learning and Cybersecurity. Passionate about protecting digital assets, exploring network security and building intelligent systems. Committed to applying cutting-edge AI techniques to real-world problems.
        </Text>
      </View>

      {/* TOOLS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tools &amp; Technologies</Text>
        <View style={styles.toolsGrid}>
          {doneTools.map(tool => (
            <View key={tool.id} style={styles.toolChip}>
              <Text style={styles.toolName}>{tool.nama}</Text>
              <Text style={styles.toolKet}>{tool.ket}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CERTIFICATIONS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {acquiredCerts.map(cert => (
          <View key={cert.id} style={styles.certRow}>
            <View style={styles.certLeft}>
              <Text style={styles.certName}>{cert.nama}</Text>
              <Text style={styles.certKet}>{cert.ket}</Text>
            </View>
            <Text style={styles.certAnno}>{cert.anno}</Text>
          </View>
        ))}
      </View>

      {/* PROJECTS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {listProyek.map(proj => (
          <View key={proj.id} style={styles.projectRow}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>{proj.title}</Text>
              <Text style={styles.projectAnno}>{proj.anno}</Text>
            </View>
            <Text style={styles.projectSubtitle}>{proj.subtitle}</Text>
          </View>
        ))}
      </View>

      {/* FOOTER */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>Alessio Gervasini — CV</Text>
        <Text style={styles.footerText} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>

    </Page>
  </Document>
);
