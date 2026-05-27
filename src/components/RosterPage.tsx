import { useState } from 'react'
import { getRosterByClass, rosterPage } from '../data/siteContent'
import type { RosterMember } from '../types'

function memberInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function hasMemberPhoto(photo: string): boolean {
  return photo.trim().length > 0
}

function MemberPhotoPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="roster-photo roster-photo--placeholder"
      role="img"
      aria-label={`${name} — photo not available`}
    >
      <span aria-hidden="true">{memberInitials(name)}</span>
    </div>
  )
}

function MemberPhoto({ member }: { member: RosterMember }) {
  const [failed, setFailed] = useState(false)
  const photoSrc = member.photo.trim()

  if (!hasMemberPhoto(photoSrc) || failed) {
    return <MemberPhotoPlaceholder name={member.name} />
  }

  return (
    <img
      className="roster-photo"
      src={photoSrc}
      alt={member.name}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

function MemberCard({ member }: { member: RosterMember }) {
  return (
    <article className="roster-member-card">
      <MemberPhoto member={member} />
      <div className="roster-member-body">
        <h4 className="roster-member-name">{member.name}</h4>
        <dl className="roster-member-details">
          {member.officerPosition.trim() ? (
            <div>
              <dt>Officer Position</dt>
              <dd>{member.officerPosition}</dd>
            </div>
          ) : null}
          <div>
            <dt>Role</dt>
            <dd>{member.role}</dd>
          </div>
          <div>
            <dt>Major</dt>
            <dd>{member.major}</dd>
          </div>
          <div>
            <dt>Hometown</dt>
            <dd>{member.hometown}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export function RosterPage() {
  const classSections = getRosterByClass()

  return (
    <article className="roster-page">
      <header className="template-header">
        <h2>{rosterPage.title}</h2>
        <p className="template-intro">{rosterPage.intro}</p>
      </header>

      <div className="roster-sections">
        {classSections.map(({ graduatingClass, members }) => (
          <section
            key={graduatingClass}
            className="roster-class-section"
            aria-labelledby={`roster-class-${graduatingClass}`}
          >
            <h3 id={`roster-class-${graduatingClass}`} className="roster-class-heading">
              Class of {graduatingClass}
            </h3>
            <div className="roster-grid">
              {members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
