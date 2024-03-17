export interface Organization {
  id: number | string,
  name: string,
  avatar: string,
  description: string,
  ownerId: number,
  createdAt: string,
  updatedAt: string,
  status: string,
  teamIds: number[] | string[],
  memberIds: number[] | string[]
}

export interface Team {
  id: number,
  name: string,
  description: string
}

export interface Member {
  userId: number | string,
  joinedAt: string,
  role: string,
}

export interface TeamComplete {
  id: number | string,
  name: string,
  description: string,
  organizationId: number | string,
  createdAt: string,
  updatedAt: string,
  members: Member[],
  teamLeaderId: number | string,
  totalMember?: number,
}

export interface UserOrganization extends Organization{
  teams: Team[]
}