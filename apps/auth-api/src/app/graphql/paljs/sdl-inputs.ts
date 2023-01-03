import gql from 'graphql-tag';

export default gql`
  scalar DateTime

  type BatchPayload @shareable {
    count: Int!
  }
  enum CalendarEventScalarFieldEnum {
    id
    url
    title
    start
    end
    allDay
  }

  enum CalendarEventsOnCalendarsScalarFieldEnum {
    calendarId
    calendarEventId
  }

  enum CalendarScalarFieldEnum {
    id
    calendarType
  }

  enum CalendarsOnUsersScalarFieldEnum {
    userId
    calendarId
  }

  enum JsonNullValueFilter {
    DbNull
    JsonNull
    AnyNull
  }

  enum NullableJsonNullValueInput {
    DbNull
    JsonNull
  }

  enum ProfileScalarFieldEnum {
    userId
    location
    joiningDate
    businessPhone
    mobilePhone
    kakaoTalkId
    designation
    profileImg
    designationIcon
    coverImg
  }

  enum QueryMode {
    default
    insensitive
  }

  enum SortOrder {
    asc
    desc
  }

  enum TeamScalarFieldEnum {
    teamName
    teamType
    teamIcon
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    createdAt
    username
    password
    email
    roles
    googleId
    googleProfile
    lastName
    firstName
  }

  enum UsersOnTeamsScalarFieldEnum {
    teamName
    userId
    assignedAt
  }

  input Auth_UserWhereInput {
    AND: [Auth_UserWhereInput!]
    OR: [Auth_UserWhereInput!]
    NOT: [Auth_UserWhereInput!]
    id: IntFilter
    createdAt: DateTimeFilter
    username: StringNullableFilter
    password: StringNullableFilter
    email: StringFilter
    roles: StringNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    lastName: StringNullableFilter
    firstName: StringNullableFilter
    profile: Auth_ProfileWhereInput
    teams: Auth_UsersOnTeamsListRelationFilter
    calendars: Auth_CalendarsOnUsersListRelationFilter
    contacted: Auth_UserListRelationFilter
    contactedBy: Auth_UserListRelationFilter
  }

  input Auth_UserOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
    profile: Auth_ProfileOrderByWithRelationInput
    teams: Auth_UsersOnTeamsOrderByRelationAggregateInput
    calendars: Auth_CalendarsOnUsersOrderByRelationAggregateInput
    contacted: Auth_UserOrderByRelationAggregateInput
    contactedBy: Auth_UserOrderByRelationAggregateInput
  }

  input Auth_UserWhereUniqueInput {
    id: Int
    username: String
    email: String
    googleId: String
    AND: [Auth_UserWhereInput!]
    OR: [Auth_UserWhereInput!]
    NOT: [Auth_UserWhereInput!]
    createdAt: DateTimeFilter
    password: StringNullableFilter
    roles: StringNullableListFilter
    googleProfile: JsonNullableFilter
    lastName: StringNullableFilter
    firstName: StringNullableFilter
    profile: Auth_ProfileWhereInput
    teams: Auth_UsersOnTeamsListRelationFilter
    calendars: Auth_CalendarsOnUsersListRelationFilter
    contacted: Auth_UserListRelationFilter
    contactedBy: Auth_UserListRelationFilter
  }

  input Auth_UserOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
    _count: Auth_UserCountOrderByAggregateInput
    _avg: Auth_UserAvgOrderByAggregateInput
    _max: Auth_UserMaxOrderByAggregateInput
    _min: Auth_UserMinOrderByAggregateInput
    _sum: Auth_UserSumOrderByAggregateInput
  }

  input Auth_UserScalarWhereWithAggregatesInput {
    AND: [Auth_UserScalarWhereWithAggregatesInput!]
    OR: [Auth_UserScalarWhereWithAggregatesInput!]
    NOT: [Auth_UserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    username: StringNullableWithAggregatesFilter
    password: StringNullableWithAggregatesFilter
    email: StringWithAggregatesFilter
    roles: StringNullableListFilter
    googleId: StringNullableWithAggregatesFilter
    googleProfile: JsonNullableWithAggregatesFilter
    lastName: StringNullableWithAggregatesFilter
    firstName: StringNullableWithAggregatesFilter
  }

  input Auth_ProfileWhereInput {
    AND: [Auth_ProfileWhereInput!]
    OR: [Auth_ProfileWhereInput!]
    NOT: [Auth_ProfileWhereInput!]
    userId: IntFilter
    user: Auth_UserWhereInput
    location: StringNullableFilter
    joiningDate: DateTimeNullableFilter
    businessPhone: StringNullableFilter
    mobilePhone: StringNullableFilter
    kakaoTalkId: StringNullableFilter
    designation: StringNullableFilter
    profileImg: StringNullableFilter
    designationIcon: StringNullableFilter
    coverImg: StringNullableFilter
  }

  input Auth_ProfileOrderByWithRelationInput {
    userId: SortOrder
    user: Auth_UserOrderByWithRelationInput
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Auth_ProfileWhereUniqueInput {
    userId: Int
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    AND: [Auth_ProfileWhereInput!]
    OR: [Auth_ProfileWhereInput!]
    NOT: [Auth_ProfileWhereInput!]
    user: Auth_UserWhereInput
    location: StringNullableFilter
    joiningDate: DateTimeNullableFilter
    designation: StringNullableFilter
    profileImg: StringNullableFilter
    designationIcon: StringNullableFilter
    coverImg: StringNullableFilter
  }

  input Auth_ProfileOrderByWithAggregationInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
    _count: Auth_ProfileCountOrderByAggregateInput
    _avg: Auth_ProfileAvgOrderByAggregateInput
    _max: Auth_ProfileMaxOrderByAggregateInput
    _min: Auth_ProfileMinOrderByAggregateInput
    _sum: Auth_ProfileSumOrderByAggregateInput
  }

  input Auth_ProfileScalarWhereWithAggregatesInput {
    AND: [Auth_ProfileScalarWhereWithAggregatesInput!]
    OR: [Auth_ProfileScalarWhereWithAggregatesInput!]
    NOT: [Auth_ProfileScalarWhereWithAggregatesInput!]
    userId: IntWithAggregatesFilter
    location: StringNullableWithAggregatesFilter
    joiningDate: DateTimeNullableWithAggregatesFilter
    businessPhone: StringNullableWithAggregatesFilter
    mobilePhone: StringNullableWithAggregatesFilter
    kakaoTalkId: StringNullableWithAggregatesFilter
    designation: StringNullableWithAggregatesFilter
    profileImg: StringNullableWithAggregatesFilter
    designationIcon: StringNullableWithAggregatesFilter
    coverImg: StringNullableWithAggregatesFilter
  }

  input Auth_UsersOnTeamsWhereInput {
    AND: [Auth_UsersOnTeamsWhereInput!]
    OR: [Auth_UsersOnTeamsWhereInput!]
    NOT: [Auth_UsersOnTeamsWhereInput!]
    team: Auth_TeamWhereInput
    teamName: StringFilter
    user: Auth_UserWhereInput
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Auth_UsersOnTeamsOrderByWithRelationInput {
    team: Auth_TeamOrderByWithRelationInput
    teamName: SortOrder
    user: Auth_UserOrderByWithRelationInput
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Auth_UsersOnTeamsWhereUniqueInput {
    teamName_userId: Auth_UsersOnTeamsTeamNameUserIdCompoundUniqueInput
    AND: [Auth_UsersOnTeamsWhereInput!]
    OR: [Auth_UsersOnTeamsWhereInput!]
    NOT: [Auth_UsersOnTeamsWhereInput!]
    team: Auth_TeamWhereInput
    teamName: StringFilter
    user: Auth_UserWhereInput
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Auth_UsersOnTeamsOrderByWithAggregationInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
    _count: Auth_UsersOnTeamsCountOrderByAggregateInput
    _avg: Auth_UsersOnTeamsAvgOrderByAggregateInput
    _max: Auth_UsersOnTeamsMaxOrderByAggregateInput
    _min: Auth_UsersOnTeamsMinOrderByAggregateInput
    _sum: Auth_UsersOnTeamsSumOrderByAggregateInput
  }

  input Auth_UsersOnTeamsScalarWhereWithAggregatesInput {
    AND: [Auth_UsersOnTeamsScalarWhereWithAggregatesInput!]
    OR: [Auth_UsersOnTeamsScalarWhereWithAggregatesInput!]
    NOT: [Auth_UsersOnTeamsScalarWhereWithAggregatesInput!]
    teamName: StringWithAggregatesFilter
    userId: IntWithAggregatesFilter
    assignedAt: DateTimeWithAggregatesFilter
  }

  input Auth_TeamWhereInput {
    AND: [Auth_TeamWhereInput!]
    OR: [Auth_TeamWhereInput!]
    NOT: [Auth_TeamWhereInput!]
    teamName: StringFilter
    users: Auth_UsersOnTeamsListRelationFilter
    teamType: StringNullableFilter
    teamIcon: StringNullableFilter
  }

  input Auth_TeamOrderByWithRelationInput {
    teamName: SortOrder
    users: Auth_UsersOnTeamsOrderByRelationAggregateInput
    teamType: SortOrder
    teamIcon: SortOrder
  }

  input Auth_TeamWhereUniqueInput {
    teamName: String
    AND: [Auth_TeamWhereInput!]
    OR: [Auth_TeamWhereInput!]
    NOT: [Auth_TeamWhereInput!]
    users: Auth_UsersOnTeamsListRelationFilter
    teamType: StringNullableFilter
    teamIcon: StringNullableFilter
  }

  input Auth_TeamOrderByWithAggregationInput {
    teamName: SortOrder
    teamType: SortOrder
    teamIcon: SortOrder
    _count: Auth_TeamCountOrderByAggregateInput
    _max: Auth_TeamMaxOrderByAggregateInput
    _min: Auth_TeamMinOrderByAggregateInput
  }

  input Auth_TeamScalarWhereWithAggregatesInput {
    AND: [Auth_TeamScalarWhereWithAggregatesInput!]
    OR: [Auth_TeamScalarWhereWithAggregatesInput!]
    NOT: [Auth_TeamScalarWhereWithAggregatesInput!]
    teamName: StringWithAggregatesFilter
    teamType: StringNullableWithAggregatesFilter
    teamIcon: StringNullableWithAggregatesFilter
  }

  input Auth_CalendarEventWhereInput {
    AND: [Auth_CalendarEventWhereInput!]
    OR: [Auth_CalendarEventWhereInput!]
    NOT: [Auth_CalendarEventWhereInput!]
    id: IntFilter
    url: StringNullableFilter
    title: StringFilter
    start: DateTimeFilter
    end: DateTimeFilter
    allDay: BoolFilter
    calendar: Auth_CalendarEventsOnCalendarsListRelationFilter
  }

  input Auth_CalendarEventOrderByWithRelationInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
    calendar: Auth_CalendarEventsOnCalendarsOrderByRelationAggregateInput
  }

  input Auth_CalendarEventWhereUniqueInput {
    id: Int
    AND: [Auth_CalendarEventWhereInput!]
    OR: [Auth_CalendarEventWhereInput!]
    NOT: [Auth_CalendarEventWhereInput!]
    url: StringNullableFilter
    title: StringFilter
    start: DateTimeFilter
    end: DateTimeFilter
    allDay: BoolFilter
    calendar: Auth_CalendarEventsOnCalendarsListRelationFilter
  }

  input Auth_CalendarEventOrderByWithAggregationInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
    _count: Auth_CalendarEventCountOrderByAggregateInput
    _avg: Auth_CalendarEventAvgOrderByAggregateInput
    _max: Auth_CalendarEventMaxOrderByAggregateInput
    _min: Auth_CalendarEventMinOrderByAggregateInput
    _sum: Auth_CalendarEventSumOrderByAggregateInput
  }

  input Auth_CalendarEventScalarWhereWithAggregatesInput {
    AND: [Auth_CalendarEventScalarWhereWithAggregatesInput!]
    OR: [Auth_CalendarEventScalarWhereWithAggregatesInput!]
    NOT: [Auth_CalendarEventScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    url: StringNullableWithAggregatesFilter
    title: StringWithAggregatesFilter
    start: DateTimeWithAggregatesFilter
    end: DateTimeWithAggregatesFilter
    allDay: BoolWithAggregatesFilter
  }

  input Auth_CalendarEventsOnCalendarsWhereInput {
    AND: [Auth_CalendarEventsOnCalendarsWhereInput!]
    OR: [Auth_CalendarEventsOnCalendarsWhereInput!]
    NOT: [Auth_CalendarEventsOnCalendarsWhereInput!]
    calendar: Auth_CalendarWhereInput
    calendarId: IntFilter
    calendarEvent: Auth_CalendarEventWhereInput
    calendarEventId: IntFilter
  }

  input Auth_CalendarEventsOnCalendarsOrderByWithRelationInput {
    calendar: Auth_CalendarOrderByWithRelationInput
    calendarId: SortOrder
    calendarEvent: Auth_CalendarEventOrderByWithRelationInput
    calendarEventId: SortOrder
  }

  input Auth_CalendarEventsOnCalendarsWhereUniqueInput {
    calendarId_calendarEventId: Auth_CalendarEventsOnCalendarsCalendarIdCalendarEventIdCompoundUniqueInput
    AND: [Auth_CalendarEventsOnCalendarsWhereInput!]
    OR: [Auth_CalendarEventsOnCalendarsWhereInput!]
    NOT: [Auth_CalendarEventsOnCalendarsWhereInput!]
    calendar: Auth_CalendarWhereInput
    calendarId: IntFilter
    calendarEvent: Auth_CalendarEventWhereInput
    calendarEventId: IntFilter
  }

  input Auth_CalendarEventsOnCalendarsOrderByWithAggregationInput {
    calendarId: SortOrder
    calendarEventId: SortOrder
    _count: Auth_CalendarEventsOnCalendarsCountOrderByAggregateInput
    _avg: Auth_CalendarEventsOnCalendarsAvgOrderByAggregateInput
    _max: Auth_CalendarEventsOnCalendarsMaxOrderByAggregateInput
    _min: Auth_CalendarEventsOnCalendarsMinOrderByAggregateInput
    _sum: Auth_CalendarEventsOnCalendarsSumOrderByAggregateInput
  }

  input Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput {
    AND: [Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput!]
    OR: [Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput!]
    NOT: [Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput!]
    calendarId: IntWithAggregatesFilter
    calendarEventId: IntWithAggregatesFilter
  }

  input Auth_CalendarWhereInput {
    AND: [Auth_CalendarWhereInput!]
    OR: [Auth_CalendarWhereInput!]
    NOT: [Auth_CalendarWhereInput!]
    id: IntFilter
    calendarType: StringFilter
    users: Auth_CalendarsOnUsersListRelationFilter
    calendarEvents: Auth_CalendarEventsOnCalendarsListRelationFilter
  }

  input Auth_CalendarOrderByWithRelationInput {
    id: SortOrder
    calendarType: SortOrder
    users: Auth_CalendarsOnUsersOrderByRelationAggregateInput
    calendarEvents: Auth_CalendarEventsOnCalendarsOrderByRelationAggregateInput
  }

  input Auth_CalendarWhereUniqueInput {
    id: Int
    AND: [Auth_CalendarWhereInput!]
    OR: [Auth_CalendarWhereInput!]
    NOT: [Auth_CalendarWhereInput!]
    calendarType: StringFilter
    users: Auth_CalendarsOnUsersListRelationFilter
    calendarEvents: Auth_CalendarEventsOnCalendarsListRelationFilter
  }

  input Auth_CalendarOrderByWithAggregationInput {
    id: SortOrder
    calendarType: SortOrder
    _count: Auth_CalendarCountOrderByAggregateInput
    _avg: Auth_CalendarAvgOrderByAggregateInput
    _max: Auth_CalendarMaxOrderByAggregateInput
    _min: Auth_CalendarMinOrderByAggregateInput
    _sum: Auth_CalendarSumOrderByAggregateInput
  }

  input Auth_CalendarScalarWhereWithAggregatesInput {
    AND: [Auth_CalendarScalarWhereWithAggregatesInput!]
    OR: [Auth_CalendarScalarWhereWithAggregatesInput!]
    NOT: [Auth_CalendarScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    calendarType: StringWithAggregatesFilter
  }

  input Auth_CalendarsOnUsersWhereInput {
    AND: [Auth_CalendarsOnUsersWhereInput!]
    OR: [Auth_CalendarsOnUsersWhereInput!]
    NOT: [Auth_CalendarsOnUsersWhereInput!]
    user: Auth_UserWhereInput
    userId: IntFilter
    calendar: Auth_CalendarWhereInput
    calendarId: IntFilter
  }

  input Auth_CalendarsOnUsersOrderByWithRelationInput {
    user: Auth_UserOrderByWithRelationInput
    userId: SortOrder
    calendar: Auth_CalendarOrderByWithRelationInput
    calendarId: SortOrder
  }

  input Auth_CalendarsOnUsersWhereUniqueInput {
    userId_calendarId: Auth_CalendarsOnUsersUserIdCalendarIdCompoundUniqueInput
    AND: [Auth_CalendarsOnUsersWhereInput!]
    OR: [Auth_CalendarsOnUsersWhereInput!]
    NOT: [Auth_CalendarsOnUsersWhereInput!]
    user: Auth_UserWhereInput
    userId: IntFilter
    calendar: Auth_CalendarWhereInput
    calendarId: IntFilter
  }

  input Auth_CalendarsOnUsersOrderByWithAggregationInput {
    userId: SortOrder
    calendarId: SortOrder
    _count: Auth_CalendarsOnUsersCountOrderByAggregateInput
    _avg: Auth_CalendarsOnUsersAvgOrderByAggregateInput
    _max: Auth_CalendarsOnUsersMaxOrderByAggregateInput
    _min: Auth_CalendarsOnUsersMinOrderByAggregateInput
    _sum: Auth_CalendarsOnUsersSumOrderByAggregateInput
  }

  input Auth_CalendarsOnUsersScalarWhereWithAggregatesInput {
    AND: [Auth_CalendarsOnUsersScalarWhereWithAggregatesInput!]
    OR: [Auth_CalendarsOnUsersScalarWhereWithAggregatesInput!]
    NOT: [Auth_CalendarsOnUsersScalarWhereWithAggregatesInput!]
    userId: IntWithAggregatesFilter
    calendarId: IntWithAggregatesFilter
  }

  input Auth_UserCreateInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileCreateNestedOneWithoutUserInput
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Auth_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
  }

  input Auth_UserUncheckedCreateInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Auth_UserUpdateInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUpdateOneWithoutUserNestedInput
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserCreateManyInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UserUpdateManyMutationInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UserUncheckedUpdateManyInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_ProfileCreateInput {
    user: Auth_UserCreateNestedOneWithoutProfileInput!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUncheckedCreateInput {
    userId: Int!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUpdateInput {
    user: Auth_UserUpdateOneRequiredWithoutProfileNestedInput
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUncheckedUpdateInput {
    userId: Int
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileCreateManyInput {
    userId: Int!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUpdateManyMutationInput {
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUncheckedUpdateManyInput {
    userId: Int
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_UsersOnTeamsCreateInput {
    team: Auth_TeamCreateNestedOneWithoutUsersInput!
    user: Auth_UserCreateNestedOneWithoutTeamsInput!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedCreateInput {
    teamName: String!
    userId: Int!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUpdateInput {
    team: Auth_TeamUpdateOneRequiredWithoutUsersNestedInput
    user: Auth_UserUpdateOneRequiredWithoutTeamsNestedInput
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateInput {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsCreateManyInput {
    teamName: String!
    userId: Int!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUpdateManyMutationInput {
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyInput {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  input Auth_TeamCreateInput {
    teamName: String!
    users: Auth_UsersOnTeamsCreateNestedManyWithoutTeamInput
    teamType: String
    teamIcon: String
  }

  input Auth_TeamUncheckedCreateInput {
    teamName: String!
    users: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput
    teamType: String
    teamIcon: String
  }

  input Auth_TeamUpdateInput {
    teamName: String
    users: Auth_UsersOnTeamsUpdateManyWithoutTeamNestedInput
    teamType: String
    teamIcon: String
  }

  input Auth_TeamUncheckedUpdateInput {
    teamName: String
    users: Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput
    teamType: String
    teamIcon: String
  }

  input Auth_TeamCreateManyInput {
    teamName: String!
    teamType: String
    teamIcon: String
  }

  input Auth_TeamUpdateManyMutationInput {
    teamName: String
    teamType: String
    teamIcon: String
  }

  input Auth_TeamUncheckedUpdateManyInput {
    teamName: String
    teamType: String
    teamIcon: String
  }

  input Auth_CalendarEventCreateInput {
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    calendar: Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarEventInput
  }

  input Auth_CalendarEventUncheckedCreateInput {
    id: Int
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    calendar: Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarEventInput
  }

  input Auth_CalendarEventUpdateInput {
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
    calendar: Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarEventNestedInput
  }

  input Auth_CalendarEventUncheckedUpdateInput {
    id: Int
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
    calendar: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventNestedInput
  }

  input Auth_CalendarEventCreateManyInput {
    id: Int
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
  }

  input Auth_CalendarEventUpdateManyMutationInput {
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
  }

  input Auth_CalendarEventUncheckedUpdateManyInput {
    id: Int
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
  }

  input Auth_CalendarEventsOnCalendarsCreateInput {
    calendar: Auth_CalendarCreateNestedOneWithoutCalendarEventsInput!
    calendarEvent: Auth_CalendarEventCreateNestedOneWithoutCalendarInput!
  }

  input Auth_CalendarEventsOnCalendarsUncheckedCreateInput {
    calendarId: Int!
    calendarEventId: Int!
  }

  input Auth_CalendarEventsOnCalendarsUpdateInput {
    calendar: Auth_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput
    calendarEvent: Auth_CalendarEventUpdateOneRequiredWithoutCalendarNestedInput
  }

  input Auth_CalendarEventsOnCalendarsUncheckedUpdateInput {
    calendarId: Int
    calendarEventId: Int
  }

  input Auth_CalendarEventsOnCalendarsCreateManyInput {
    calendarId: Int!
    calendarEventId: Int!
  }

  input Auth_CalendarEventsOnCalendarsUncheckedUpdateManyInput {
    calendarId: Int
    calendarEventId: Int
  }

  input Auth_CalendarCreateInput {
    calendarType: String!
    users: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarInput
    calendarEvents: Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarInput
  }

  input Auth_CalendarUncheckedCreateInput {
    id: Int
    calendarType: String!
    users: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput
    calendarEvents: Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarInput
  }

  input Auth_CalendarUpdateInput {
    calendarType: String
    users: Auth_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput
    calendarEvents: Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarNestedInput
  }

  input Auth_CalendarUncheckedUpdateInput {
    id: Int
    calendarType: String
    users: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput
    calendarEvents: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Auth_CalendarCreateManyInput {
    id: Int
    calendarType: String!
  }

  input Auth_CalendarUpdateManyMutationInput {
    calendarType: String
  }

  input Auth_CalendarUncheckedUpdateManyInput {
    id: Int
    calendarType: String
  }

  input Auth_CalendarsOnUsersCreateInput {
    user: Auth_UserCreateNestedOneWithoutCalendarsInput!
    calendar: Auth_CalendarCreateNestedOneWithoutUsersInput!
  }

  input Auth_CalendarsOnUsersUncheckedCreateInput {
    userId: Int!
    calendarId: Int!
  }

  input Auth_CalendarsOnUsersUpdateInput {
    user: Auth_UserUpdateOneRequiredWithoutCalendarsNestedInput
    calendar: Auth_CalendarUpdateOneRequiredWithoutUsersNestedInput
  }

  input Auth_CalendarsOnUsersUncheckedUpdateInput {
    userId: Int
    calendarId: Int
  }

  input Auth_CalendarsOnUsersCreateManyInput {
    userId: Int!
    calendarId: Int!
  }

  input Auth_CalendarsOnUsersUncheckedUpdateManyInput {
    userId: Int
    calendarId: Int
  }

  input IntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableFilter
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringFilter
  }

  input StringNullableListFilter {
    equals: [String!]
    has: String
    hasEvery: [String!]
    hasSome: [String!]
    isEmpty: Boolean
  }

  input JsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input Auth_ProfileRelationFilter {
    is: Auth_ProfileWhereInput
    isNot: Auth_ProfileWhereInput
  }

  input Auth_UsersOnTeamsListRelationFilter {
    every: Auth_UsersOnTeamsWhereInput
    some: Auth_UsersOnTeamsWhereInput
    none: Auth_UsersOnTeamsWhereInput
  }

  input Auth_CalendarsOnUsersListRelationFilter {
    every: Auth_CalendarsOnUsersWhereInput
    some: Auth_CalendarsOnUsersWhereInput
    none: Auth_CalendarsOnUsersWhereInput
  }

  input Auth_UserListRelationFilter {
    every: Auth_UserWhereInput
    some: Auth_UserWhereInput
    none: Auth_UserWhereInput
  }

  input Auth_UsersOnTeamsOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Auth_CalendarsOnUsersOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Auth_UserOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Auth_UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Auth_UserAvgOrderByAggregateInput {
    id: SortOrder
  }

  input Auth_UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Auth_UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Auth_UserSumOrderByAggregateInput {
    id: SortOrder
  }

  input IntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input JsonNullableWithAggregatesFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
    _count: NestedIntNullableFilter
    _min: NestedJsonNullableFilter
    _max: NestedJsonNullableFilter
  }

  input Auth_UserRelationFilter {
    is: Auth_UserWhereInput
    isNot: Auth_UserWhereInput
  }

  input DateTimeNullableFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableFilter
  }

  input Auth_ProfileCountOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Auth_ProfileAvgOrderByAggregateInput {
    userId: SortOrder
  }

  input Auth_ProfileMaxOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Auth_ProfileMinOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Auth_ProfileSumOrderByAggregateInput {
    userId: SortOrder
  }

  input DateTimeNullableWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedDateTimeNullableFilter
    _max: NestedDateTimeNullableFilter
  }

  input Auth_TeamRelationFilter {
    is: Auth_TeamWhereInput
    isNot: Auth_TeamWhereInput
  }

  input Auth_UsersOnTeamsTeamNameUserIdCompoundUniqueInput {
    teamName: String!
    userId: Int!
  }

  input Auth_UsersOnTeamsCountOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Auth_UsersOnTeamsAvgOrderByAggregateInput {
    userId: SortOrder
  }

  input Auth_UsersOnTeamsMaxOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Auth_UsersOnTeamsMinOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Auth_UsersOnTeamsSumOrderByAggregateInput {
    userId: SortOrder
  }

  input Auth_TeamCountOrderByAggregateInput {
    teamName: SortOrder
    teamType: SortOrder
    teamIcon: SortOrder
  }

  input Auth_TeamMaxOrderByAggregateInput {
    teamName: SortOrder
    teamType: SortOrder
    teamIcon: SortOrder
  }

  input Auth_TeamMinOrderByAggregateInput {
    teamName: SortOrder
    teamType: SortOrder
    teamIcon: SortOrder
  }

  input BoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input Auth_CalendarEventsOnCalendarsListRelationFilter {
    every: Auth_CalendarEventsOnCalendarsWhereInput
    some: Auth_CalendarEventsOnCalendarsWhereInput
    none: Auth_CalendarEventsOnCalendarsWhereInput
  }

  input Auth_CalendarEventsOnCalendarsOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Auth_CalendarEventCountOrderByAggregateInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
  }

  input Auth_CalendarEventAvgOrderByAggregateInput {
    id: SortOrder
  }

  input Auth_CalendarEventMaxOrderByAggregateInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
  }

  input Auth_CalendarEventMinOrderByAggregateInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
  }

  input Auth_CalendarEventSumOrderByAggregateInput {
    id: SortOrder
  }

  input BoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input Auth_CalendarRelationFilter {
    is: Auth_CalendarWhereInput
    isNot: Auth_CalendarWhereInput
  }

  input Auth_CalendarEventRelationFilter {
    is: Auth_CalendarEventWhereInput
    isNot: Auth_CalendarEventWhereInput
  }

  input Auth_CalendarEventsOnCalendarsCalendarIdCalendarEventIdCompoundUniqueInput {
    calendarId: Int!
    calendarEventId: Int!
  }

  input Auth_CalendarEventsOnCalendarsCountOrderByAggregateInput {
    calendarId: SortOrder
    calendarEventId: SortOrder
  }

  input Auth_CalendarEventsOnCalendarsAvgOrderByAggregateInput {
    calendarId: SortOrder
    calendarEventId: SortOrder
  }

  input Auth_CalendarEventsOnCalendarsMaxOrderByAggregateInput {
    calendarId: SortOrder
    calendarEventId: SortOrder
  }

  input Auth_CalendarEventsOnCalendarsMinOrderByAggregateInput {
    calendarId: SortOrder
    calendarEventId: SortOrder
  }

  input Auth_CalendarEventsOnCalendarsSumOrderByAggregateInput {
    calendarId: SortOrder
    calendarEventId: SortOrder
  }

  input Auth_CalendarCountOrderByAggregateInput {
    id: SortOrder
    calendarType: SortOrder
  }

  input Auth_CalendarAvgOrderByAggregateInput {
    id: SortOrder
  }

  input Auth_CalendarMaxOrderByAggregateInput {
    id: SortOrder
    calendarType: SortOrder
  }

  input Auth_CalendarMinOrderByAggregateInput {
    id: SortOrder
    calendarType: SortOrder
  }

  input Auth_CalendarSumOrderByAggregateInput {
    id: SortOrder
  }

  input Auth_CalendarsOnUsersUserIdCalendarIdCompoundUniqueInput {
    userId: Int!
    calendarId: Int!
  }

  input Auth_CalendarsOnUsersCountOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Auth_CalendarsOnUsersAvgOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Auth_CalendarsOnUsersMaxOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Auth_CalendarsOnUsersMinOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Auth_CalendarsOnUsersSumOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Auth_UserCreaterolesInput {
    set: [String!]!
  }

  input Auth_ProfileCreateNestedOneWithoutUserInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    connect: Auth_ProfileWhereUniqueInput
  }

  input Auth_UsersOnTeamsCreateNestedManyWithoutUserInput {
    create: [Auth_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    createMany: Auth_UsersOnTeamsCreateManyUserInputEnvelope
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
  }

  input Auth_CalendarsOnUsersCreateNestedManyWithoutUserInput {
    create: [Auth_CalendarsOnUsersCreateWithoutUserInput!]
    connectOrCreate: [Auth_CalendarsOnUsersCreateOrConnectWithoutUserInput!]
    createMany: Auth_CalendarsOnUsersCreateManyUserInputEnvelope
    connect: [Auth_CalendarsOnUsersWhereUniqueInput!]
  }

  input Auth_UserCreateNestedManyWithoutContactedByInput {
    create: [Auth_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedByInput!]
    connect: [Auth_UserWhereUniqueInput!]
  }

  input Auth_UserCreateNestedManyWithoutContactedInput {
    create: [Auth_UserCreateWithoutContactedInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedInput!]
    connect: [Auth_UserWhereUniqueInput!]
  }

  input Auth_ProfileUncheckedCreateNestedOneWithoutUserInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    connect: Auth_ProfileWhereUniqueInput
  }

  input Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput {
    create: [Auth_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    createMany: Auth_UsersOnTeamsCreateManyUserInputEnvelope
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
  }

  input Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput {
    create: [Auth_CalendarsOnUsersCreateWithoutUserInput!]
    connectOrCreate: [Auth_CalendarsOnUsersCreateOrConnectWithoutUserInput!]
    createMany: Auth_CalendarsOnUsersCreateManyUserInputEnvelope
    connect: [Auth_CalendarsOnUsersWhereUniqueInput!]
  }

  input Auth_UserUncheckedCreateNestedManyWithoutContactedByInput {
    create: [Auth_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedByInput!]
    connect: [Auth_UserWhereUniqueInput!]
  }

  input Auth_UserUncheckedCreateNestedManyWithoutContactedInput {
    create: [Auth_UserCreateWithoutContactedInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedInput!]
    connect: [Auth_UserWhereUniqueInput!]
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input Auth_UserUpdaterolesInput {
    set: [String!]
    push: [String!]
  }

  input Auth_ProfileUpdateOneWithoutUserNestedInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    upsert: Auth_ProfileUpsertWithoutUserInput
    disconnect: Auth_ProfileWhereInput
    delete: Auth_ProfileWhereInput
    connect: Auth_ProfileWhereUniqueInput
    update: Auth_ProfileUpdateWithoutUserInput
  }

  input Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput {
    create: [Auth_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    upsert: [Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Auth_UsersOnTeamsCreateManyUserInputEnvelope
    set: [Auth_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Auth_UsersOnTeamsWhereUniqueInput!]
    delete: [Auth_UsersOnTeamsWhereUniqueInput!]
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
    update: [Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Auth_UsersOnTeamsScalarWhereInput!]
  }

  input Auth_CalendarsOnUsersUpdateManyWithoutUserNestedInput {
    create: [Auth_CalendarsOnUsersCreateWithoutUserInput!]
    connectOrCreate: [Auth_CalendarsOnUsersCreateOrConnectWithoutUserInput!]
    upsert: [Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Auth_CalendarsOnUsersCreateManyUserInputEnvelope
    set: [Auth_CalendarsOnUsersWhereUniqueInput!]
    disconnect: [Auth_CalendarsOnUsersWhereUniqueInput!]
    delete: [Auth_CalendarsOnUsersWhereUniqueInput!]
    connect: [Auth_CalendarsOnUsersWhereUniqueInput!]
    update: [Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Auth_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Auth_CalendarsOnUsersScalarWhereInput!]
  }

  input Auth_UserUpdateManyWithoutContactedByNestedInput {
    create: [Auth_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedByInput!]
    upsert: [Auth_UserUpsertWithWhereUniqueWithoutContactedByInput!]
    set: [Auth_UserWhereUniqueInput!]
    disconnect: [Auth_UserWhereUniqueInput!]
    delete: [Auth_UserWhereUniqueInput!]
    connect: [Auth_UserWhereUniqueInput!]
    update: [Auth_UserUpdateWithWhereUniqueWithoutContactedByInput!]
    updateMany: [Auth_UserUpdateManyWithWhereWithoutContactedByInput!]
    deleteMany: [Auth_UserScalarWhereInput!]
  }

  input Auth_UserUpdateManyWithoutContactedNestedInput {
    create: [Auth_UserCreateWithoutContactedInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedInput!]
    upsert: [Auth_UserUpsertWithWhereUniqueWithoutContactedInput!]
    set: [Auth_UserWhereUniqueInput!]
    disconnect: [Auth_UserWhereUniqueInput!]
    delete: [Auth_UserWhereUniqueInput!]
    connect: [Auth_UserWhereUniqueInput!]
    update: [Auth_UserUpdateWithWhereUniqueWithoutContactedInput!]
    updateMany: [Auth_UserUpdateManyWithWhereWithoutContactedInput!]
    deleteMany: [Auth_UserScalarWhereInput!]
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    upsert: Auth_ProfileUpsertWithoutUserInput
    disconnect: Auth_ProfileWhereInput
    delete: Auth_ProfileWhereInput
    connect: Auth_ProfileWhereUniqueInput
    update: Auth_ProfileUpdateWithoutUserInput
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput {
    create: [Auth_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    upsert: [Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Auth_UsersOnTeamsCreateManyUserInputEnvelope
    set: [Auth_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Auth_UsersOnTeamsWhereUniqueInput!]
    delete: [Auth_UsersOnTeamsWhereUniqueInput!]
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
    update: [Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Auth_UsersOnTeamsScalarWhereInput!]
  }

  input Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput {
    create: [Auth_CalendarsOnUsersCreateWithoutUserInput!]
    connectOrCreate: [Auth_CalendarsOnUsersCreateOrConnectWithoutUserInput!]
    upsert: [Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Auth_CalendarsOnUsersCreateManyUserInputEnvelope
    set: [Auth_CalendarsOnUsersWhereUniqueInput!]
    disconnect: [Auth_CalendarsOnUsersWhereUniqueInput!]
    delete: [Auth_CalendarsOnUsersWhereUniqueInput!]
    connect: [Auth_CalendarsOnUsersWhereUniqueInput!]
    update: [Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Auth_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Auth_CalendarsOnUsersScalarWhereInput!]
  }

  input Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput {
    create: [Auth_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedByInput!]
    upsert: [Auth_UserUpsertWithWhereUniqueWithoutContactedByInput!]
    set: [Auth_UserWhereUniqueInput!]
    disconnect: [Auth_UserWhereUniqueInput!]
    delete: [Auth_UserWhereUniqueInput!]
    connect: [Auth_UserWhereUniqueInput!]
    update: [Auth_UserUpdateWithWhereUniqueWithoutContactedByInput!]
    updateMany: [Auth_UserUpdateManyWithWhereWithoutContactedByInput!]
    deleteMany: [Auth_UserScalarWhereInput!]
  }

  input Auth_UserUncheckedUpdateManyWithoutContactedNestedInput {
    create: [Auth_UserCreateWithoutContactedInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedInput!]
    upsert: [Auth_UserUpsertWithWhereUniqueWithoutContactedInput!]
    set: [Auth_UserWhereUniqueInput!]
    disconnect: [Auth_UserWhereUniqueInput!]
    delete: [Auth_UserWhereUniqueInput!]
    connect: [Auth_UserWhereUniqueInput!]
    update: [Auth_UserUpdateWithWhereUniqueWithoutContactedInput!]
    updateMany: [Auth_UserUpdateManyWithWhereWithoutContactedInput!]
    deleteMany: [Auth_UserScalarWhereInput!]
  }

  input Auth_UserCreateNestedOneWithoutProfileInput {
    create: Auth_UserUncheckedCreateWithoutProfileInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutProfileInput
    connect: Auth_UserWhereUniqueInput
  }

  input Auth_UserUpdateOneRequiredWithoutProfileNestedInput {
    create: Auth_UserUncheckedCreateWithoutProfileInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutProfileInput
    upsert: Auth_UserUpsertWithoutProfileInput
    connect: Auth_UserWhereUniqueInput
    update: Auth_UserUpdateWithoutProfileInput
  }

  input NullableDateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input Auth_TeamCreateNestedOneWithoutUsersInput {
    create: Auth_TeamUncheckedCreateWithoutUsersInput
    connectOrCreate: Auth_TeamCreateOrConnectWithoutUsersInput
    connect: Auth_TeamWhereUniqueInput
  }

  input Auth_UserCreateNestedOneWithoutTeamsInput {
    create: Auth_UserUncheckedCreateWithoutTeamsInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutTeamsInput
    connect: Auth_UserWhereUniqueInput
  }

  input Auth_TeamUpdateOneRequiredWithoutUsersNestedInput {
    create: Auth_TeamUncheckedCreateWithoutUsersInput
    connectOrCreate: Auth_TeamCreateOrConnectWithoutUsersInput
    upsert: Auth_TeamUpsertWithoutUsersInput
    connect: Auth_TeamWhereUniqueInput
    update: Auth_TeamUpdateWithoutUsersInput
  }

  input Auth_UserUpdateOneRequiredWithoutTeamsNestedInput {
    create: Auth_UserUncheckedCreateWithoutTeamsInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutTeamsInput
    upsert: Auth_UserUpsertWithoutTeamsInput
    connect: Auth_UserWhereUniqueInput
    update: Auth_UserUpdateWithoutTeamsInput
  }

  input Auth_UsersOnTeamsCreateNestedManyWithoutTeamInput {
    create: [Auth_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    createMany: Auth_UsersOnTeamsCreateManyTeamInputEnvelope
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
  }

  input Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput {
    create: [Auth_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    createMany: Auth_UsersOnTeamsCreateManyTeamInputEnvelope
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
  }

  input Auth_UsersOnTeamsUpdateManyWithoutTeamNestedInput {
    create: [Auth_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    upsert: [Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput!]
    createMany: Auth_UsersOnTeamsCreateManyTeamInputEnvelope
    set: [Auth_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Auth_UsersOnTeamsWhereUniqueInput!]
    delete: [Auth_UsersOnTeamsWhereUniqueInput!]
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
    update: [Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput!]
    updateMany: [Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput!]
    deleteMany: [Auth_UsersOnTeamsScalarWhereInput!]
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput {
    create: [Auth_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    upsert: [Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput!]
    createMany: Auth_UsersOnTeamsCreateManyTeamInputEnvelope
    set: [Auth_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Auth_UsersOnTeamsWhereUniqueInput!]
    delete: [Auth_UsersOnTeamsWhereUniqueInput!]
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
    update: [Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput!]
    updateMany: [Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput!]
    deleteMany: [Auth_UsersOnTeamsScalarWhereInput!]
  }

  input Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarEventInput {
    create: [Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput!]
    connectOrCreate: [Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput!]
    createMany: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope
    connect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
  }

  input Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarEventInput {
    create: [Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput!]
    connectOrCreate: [Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput!]
    createMany: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope
    connect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
  }

  input BoolFieldUpdateOperationsInput {
    set: Boolean
  }

  input Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarEventNestedInput {
    create: [Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput!]
    connectOrCreate: [Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput!]
    upsert: [Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarEventInput!]
    createMany: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope
    set: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    disconnect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    delete: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    connect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    update: [Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarEventInput!]
    updateMany: [Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarEventInput!]
    deleteMany: [Auth_CalendarEventsOnCalendarsScalarWhereInput!]
  }

  input Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventNestedInput {
    create: [Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput!]
    connectOrCreate: [Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput!]
    upsert: [Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarEventInput!]
    createMany: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope
    set: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    disconnect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    delete: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    connect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    update: [Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarEventInput!]
    updateMany: [Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarEventInput!]
    deleteMany: [Auth_CalendarEventsOnCalendarsScalarWhereInput!]
  }

  input Auth_CalendarCreateNestedOneWithoutCalendarEventsInput {
    create: Auth_CalendarUncheckedCreateWithoutCalendarEventsInput
    connectOrCreate: Auth_CalendarCreateOrConnectWithoutCalendarEventsInput
    connect: Auth_CalendarWhereUniqueInput
  }

  input Auth_CalendarEventCreateNestedOneWithoutCalendarInput {
    create: Auth_CalendarEventUncheckedCreateWithoutCalendarInput
    connectOrCreate: Auth_CalendarEventCreateOrConnectWithoutCalendarInput
    connect: Auth_CalendarEventWhereUniqueInput
  }

  input Auth_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput {
    create: Auth_CalendarUncheckedCreateWithoutCalendarEventsInput
    connectOrCreate: Auth_CalendarCreateOrConnectWithoutCalendarEventsInput
    upsert: Auth_CalendarUpsertWithoutCalendarEventsInput
    connect: Auth_CalendarWhereUniqueInput
    update: Auth_CalendarUpdateWithoutCalendarEventsInput
  }

  input Auth_CalendarEventUpdateOneRequiredWithoutCalendarNestedInput {
    create: Auth_CalendarEventUncheckedCreateWithoutCalendarInput
    connectOrCreate: Auth_CalendarEventCreateOrConnectWithoutCalendarInput
    upsert: Auth_CalendarEventUpsertWithoutCalendarInput
    connect: Auth_CalendarEventWhereUniqueInput
    update: Auth_CalendarEventUpdateWithoutCalendarInput
  }

  input Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarInput {
    create: [Auth_CalendarsOnUsersCreateWithoutCalendarInput!]
    connectOrCreate: [Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput!]
    createMany: Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope
    connect: [Auth_CalendarsOnUsersWhereUniqueInput!]
  }

  input Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarInput {
    create: [Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput!]
    connectOrCreate: [Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput!]
    createMany: Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope
    connect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
  }

  input Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput {
    create: [Auth_CalendarsOnUsersCreateWithoutCalendarInput!]
    connectOrCreate: [Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput!]
    createMany: Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope
    connect: [Auth_CalendarsOnUsersWhereUniqueInput!]
  }

  input Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarInput {
    create: [Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput!]
    connectOrCreate: [Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput!]
    createMany: Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope
    connect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
  }

  input Auth_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput {
    create: [Auth_CalendarsOnUsersCreateWithoutCalendarInput!]
    connectOrCreate: [Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput!]
    upsert: [Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput!]
    createMany: Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope
    set: [Auth_CalendarsOnUsersWhereUniqueInput!]
    disconnect: [Auth_CalendarsOnUsersWhereUniqueInput!]
    delete: [Auth_CalendarsOnUsersWhereUniqueInput!]
    connect: [Auth_CalendarsOnUsersWhereUniqueInput!]
    update: [Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput!]
    updateMany: [Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput!]
    deleteMany: [Auth_CalendarsOnUsersScalarWhereInput!]
  }

  input Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarNestedInput {
    create: [Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput!]
    connectOrCreate: [Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput!]
    upsert: [Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarInput!]
    createMany: Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope
    set: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    disconnect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    delete: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    connect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    update: [Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarInput!]
    updateMany: [Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarInput!]
    deleteMany: [Auth_CalendarEventsOnCalendarsScalarWhereInput!]
  }

  input Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput {
    create: [Auth_CalendarsOnUsersCreateWithoutCalendarInput!]
    connectOrCreate: [Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput!]
    upsert: [Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput!]
    createMany: Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope
    set: [Auth_CalendarsOnUsersWhereUniqueInput!]
    disconnect: [Auth_CalendarsOnUsersWhereUniqueInput!]
    delete: [Auth_CalendarsOnUsersWhereUniqueInput!]
    connect: [Auth_CalendarsOnUsersWhereUniqueInput!]
    update: [Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput!]
    updateMany: [Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput!]
    deleteMany: [Auth_CalendarsOnUsersScalarWhereInput!]
  }

  input Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarNestedInput {
    create: [Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput!]
    connectOrCreate: [Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput!]
    upsert: [Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarInput!]
    createMany: Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope
    set: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    disconnect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    delete: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    connect: [Auth_CalendarEventsOnCalendarsWhereUniqueInput!]
    update: [Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarInput!]
    updateMany: [Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarInput!]
    deleteMany: [Auth_CalendarEventsOnCalendarsScalarWhereInput!]
  }

  input Auth_UserCreateNestedOneWithoutCalendarsInput {
    create: Auth_UserUncheckedCreateWithoutCalendarsInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutCalendarsInput
    connect: Auth_UserWhereUniqueInput
  }

  input Auth_CalendarCreateNestedOneWithoutUsersInput {
    create: Auth_CalendarUncheckedCreateWithoutUsersInput
    connectOrCreate: Auth_CalendarCreateOrConnectWithoutUsersInput
    connect: Auth_CalendarWhereUniqueInput
  }

  input Auth_UserUpdateOneRequiredWithoutCalendarsNestedInput {
    create: Auth_UserUncheckedCreateWithoutCalendarsInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutCalendarsInput
    upsert: Auth_UserUpsertWithoutCalendarsInput
    connect: Auth_UserWhereUniqueInput
    update: Auth_UserUpdateWithoutCalendarsInput
  }

  input Auth_CalendarUpdateOneRequiredWithoutUsersNestedInput {
    create: Auth_CalendarUncheckedCreateWithoutUsersInput
    connectOrCreate: Auth_CalendarCreateOrConnectWithoutUsersInput
    upsert: Auth_CalendarUpsertWithoutUsersInput
    connect: Auth_CalendarWhereUniqueInput
    update: Auth_CalendarUpdateWithoutUsersInput
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedIntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input NestedFloatFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatFilter
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedJsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input NestedDateTimeNullableFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableFilter
  }

  input NestedDateTimeNullableWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedDateTimeNullableFilter
    _max: NestedDateTimeNullableFilter
  }

  input NestedBoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input NestedBoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input Auth_ProfileCreateWithoutUserInput {
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUncheckedCreateWithoutUserInput {
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileCreateOrConnectWithoutUserInput {
    where: Auth_ProfileWhereUniqueInput!
    create: Auth_ProfileUncheckedCreateWithoutUserInput!
  }

  input Auth_UsersOnTeamsCreateWithoutUserInput {
    team: Auth_TeamCreateNestedOneWithoutUsersInput!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedCreateWithoutUserInput {
    teamName: String!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsCreateOrConnectWithoutUserInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    create: Auth_UsersOnTeamsUncheckedCreateWithoutUserInput!
  }

  input Auth_UsersOnTeamsCreateManyUserInputEnvelope {
    data: [Auth_UsersOnTeamsCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input Auth_CalendarsOnUsersCreateWithoutUserInput {
    calendar: Auth_CalendarCreateNestedOneWithoutUsersInput!
  }

  input Auth_CalendarsOnUsersUncheckedCreateWithoutUserInput {
    calendarId: Int!
  }

  input Auth_CalendarsOnUsersCreateOrConnectWithoutUserInput {
    where: Auth_CalendarsOnUsersWhereUniqueInput!
    create: Auth_CalendarsOnUsersUncheckedCreateWithoutUserInput!
  }

  input Auth_CalendarsOnUsersCreateManyUserInputEnvelope {
    data: [Auth_CalendarsOnUsersCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input Auth_UserCreateWithoutContactedByInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileCreateNestedOneWithoutUserInput
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Auth_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
  }

  input Auth_UserUncheckedCreateWithoutContactedByInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
  }

  input Auth_UserCreateOrConnectWithoutContactedByInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutContactedByInput!
  }

  input Auth_UserCreateWithoutContactedInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileCreateNestedOneWithoutUserInput
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Auth_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
  }

  input Auth_UserUncheckedCreateWithoutContactedInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Auth_UserCreateOrConnectWithoutContactedInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutContactedInput!
  }

  input Auth_ProfileUpsertWithoutUserInput {
    update: Auth_ProfileUncheckedUpdateWithoutUserInput!
    create: Auth_ProfileUncheckedCreateWithoutUserInput!
    where: Auth_ProfileWhereInput
  }

  input Auth_ProfileUpdateToOneWithWhereWithoutUserInput {
    where: Auth_ProfileWhereInput
    data: Auth_ProfileUncheckedUpdateWithoutUserInput!
  }

  input Auth_ProfileUpdateWithoutUserInput {
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUncheckedUpdateWithoutUserInput {
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    update: Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput!
    create: Auth_UsersOnTeamsUncheckedCreateWithoutUserInput!
  }

  input Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    data: Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput!
  }

  input Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput {
    where: Auth_UsersOnTeamsScalarWhereInput!
    data: Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput!
  }

  input Auth_UsersOnTeamsScalarWhereInput {
    AND: [Auth_UsersOnTeamsScalarWhereInput!]
    OR: [Auth_UsersOnTeamsScalarWhereInput!]
    NOT: [Auth_UsersOnTeamsScalarWhereInput!]
    teamName: StringFilter
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput {
    where: Auth_CalendarsOnUsersWhereUniqueInput!
    update: Auth_CalendarsOnUsersUncheckedUpdateWithoutUserInput!
    create: Auth_CalendarsOnUsersUncheckedCreateWithoutUserInput!
  }

  input Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput {
    where: Auth_CalendarsOnUsersWhereUniqueInput!
    data: Auth_CalendarsOnUsersUncheckedUpdateWithoutUserInput!
  }

  input Auth_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput {
    where: Auth_CalendarsOnUsersScalarWhereInput!
    data: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput!
  }

  input Auth_CalendarsOnUsersScalarWhereInput {
    AND: [Auth_CalendarsOnUsersScalarWhereInput!]
    OR: [Auth_CalendarsOnUsersScalarWhereInput!]
    NOT: [Auth_CalendarsOnUsersScalarWhereInput!]
    userId: IntFilter
    calendarId: IntFilter
  }

  input Auth_UserUpsertWithWhereUniqueWithoutContactedByInput {
    where: Auth_UserWhereUniqueInput!
    update: Auth_UserUncheckedUpdateWithoutContactedByInput!
    create: Auth_UserUncheckedCreateWithoutContactedByInput!
  }

  input Auth_UserUpdateWithWhereUniqueWithoutContactedByInput {
    where: Auth_UserWhereUniqueInput!
    data: Auth_UserUncheckedUpdateWithoutContactedByInput!
  }

  input Auth_UserUpdateManyWithWhereWithoutContactedByInput {
    where: Auth_UserScalarWhereInput!
    data: Auth_UserUncheckedUpdateManyWithoutContactedInput!
  }

  input Auth_UserScalarWhereInput {
    AND: [Auth_UserScalarWhereInput!]
    OR: [Auth_UserScalarWhereInput!]
    NOT: [Auth_UserScalarWhereInput!]
    id: IntFilter
    createdAt: DateTimeFilter
    username: StringNullableFilter
    password: StringNullableFilter
    email: StringFilter
    roles: StringNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    lastName: StringNullableFilter
    firstName: StringNullableFilter
  }

  input Auth_UserUpsertWithWhereUniqueWithoutContactedInput {
    where: Auth_UserWhereUniqueInput!
    update: Auth_UserUncheckedUpdateWithoutContactedInput!
    create: Auth_UserUncheckedCreateWithoutContactedInput!
  }

  input Auth_UserUpdateWithWhereUniqueWithoutContactedInput {
    where: Auth_UserWhereUniqueInput!
    data: Auth_UserUncheckedUpdateWithoutContactedInput!
  }

  input Auth_UserUpdateManyWithWhereWithoutContactedInput {
    where: Auth_UserScalarWhereInput!
    data: Auth_UserUncheckedUpdateManyWithoutContactedByInput!
  }

  input Auth_UserCreateWithoutProfileInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Auth_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
  }

  input Auth_UserUncheckedCreateWithoutProfileInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Auth_UserCreateOrConnectWithoutProfileInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutProfileInput!
  }

  input Auth_UserUpsertWithoutProfileInput {
    update: Auth_UserUncheckedUpdateWithoutProfileInput!
    create: Auth_UserUncheckedCreateWithoutProfileInput!
    where: Auth_UserWhereInput
  }

  input Auth_UserUpdateToOneWithWhereWithoutProfileInput {
    where: Auth_UserWhereInput
    data: Auth_UserUncheckedUpdateWithoutProfileInput!
  }

  input Auth_UserUpdateWithoutProfileInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateWithoutProfileInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Auth_TeamCreateWithoutUsersInput {
    teamName: String!
    teamType: String
    teamIcon: String
  }

  input Auth_TeamUncheckedCreateWithoutUsersInput {
    teamName: String!
    teamType: String
    teamIcon: String
  }

  input Auth_TeamCreateOrConnectWithoutUsersInput {
    where: Auth_TeamWhereUniqueInput!
    create: Auth_TeamUncheckedCreateWithoutUsersInput!
  }

  input Auth_UserCreateWithoutTeamsInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileCreateNestedOneWithoutUserInput
    calendars: Auth_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
  }

  input Auth_UserUncheckedCreateWithoutTeamsInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput
    calendars: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Auth_UserCreateOrConnectWithoutTeamsInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutTeamsInput!
  }

  input Auth_TeamUpsertWithoutUsersInput {
    update: Auth_TeamUncheckedUpdateWithoutUsersInput!
    create: Auth_TeamUncheckedCreateWithoutUsersInput!
    where: Auth_TeamWhereInput
  }

  input Auth_TeamUpdateToOneWithWhereWithoutUsersInput {
    where: Auth_TeamWhereInput
    data: Auth_TeamUncheckedUpdateWithoutUsersInput!
  }

  input Auth_TeamUpdateWithoutUsersInput {
    teamName: String
    teamType: String
    teamIcon: String
  }

  input Auth_TeamUncheckedUpdateWithoutUsersInput {
    teamName: String
    teamType: String
    teamIcon: String
  }

  input Auth_UserUpsertWithoutTeamsInput {
    update: Auth_UserUncheckedUpdateWithoutTeamsInput!
    create: Auth_UserUncheckedCreateWithoutTeamsInput!
    where: Auth_UserWhereInput
  }

  input Auth_UserUpdateToOneWithWhereWithoutTeamsInput {
    where: Auth_UserWhereInput
    data: Auth_UserUncheckedUpdateWithoutTeamsInput!
  }

  input Auth_UserUpdateWithoutTeamsInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUpdateOneWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateWithoutTeamsInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Auth_UsersOnTeamsCreateWithoutTeamInput {
    user: Auth_UserCreateNestedOneWithoutTeamsInput!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput {
    userId: Int!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    create: Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput!
  }

  input Auth_UsersOnTeamsCreateManyTeamInputEnvelope {
    data: [Auth_UsersOnTeamsCreateManyTeamInput!]!
    skipDuplicates: Boolean
  }

  input Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    update: Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput!
    create: Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput!
  }

  input Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    data: Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput!
  }

  input Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput {
    where: Auth_UsersOnTeamsScalarWhereInput!
    data: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput!
  }

  input Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput {
    calendar: Auth_CalendarCreateNestedOneWithoutCalendarEventsInput!
  }

  input Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarEventInput {
    calendarId: Int!
  }

  input Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput {
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    create: Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarEventInput!
  }

  input Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope {
    data: [Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInput!]!
    skipDuplicates: Boolean
  }

  input Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarEventInput {
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    update: Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarEventInput!
    create: Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarEventInput!
  }

  input Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarEventInput {
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    data: Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarEventInput!
  }

  input Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarEventInput {
    where: Auth_CalendarEventsOnCalendarsScalarWhereInput!
    data: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarInput!
  }

  input Auth_CalendarEventsOnCalendarsScalarWhereInput {
    AND: [Auth_CalendarEventsOnCalendarsScalarWhereInput!]
    OR: [Auth_CalendarEventsOnCalendarsScalarWhereInput!]
    NOT: [Auth_CalendarEventsOnCalendarsScalarWhereInput!]
    calendarId: IntFilter
    calendarEventId: IntFilter
  }

  input Auth_CalendarCreateWithoutCalendarEventsInput {
    calendarType: String!
    users: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarInput
  }

  input Auth_CalendarUncheckedCreateWithoutCalendarEventsInput {
    id: Int
    calendarType: String!
    users: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput
  }

  input Auth_CalendarCreateOrConnectWithoutCalendarEventsInput {
    where: Auth_CalendarWhereUniqueInput!
    create: Auth_CalendarUncheckedCreateWithoutCalendarEventsInput!
  }

  input Auth_CalendarEventCreateWithoutCalendarInput {
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
  }

  input Auth_CalendarEventUncheckedCreateWithoutCalendarInput {
    id: Int
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
  }

  input Auth_CalendarEventCreateOrConnectWithoutCalendarInput {
    where: Auth_CalendarEventWhereUniqueInput!
    create: Auth_CalendarEventUncheckedCreateWithoutCalendarInput!
  }

  input Auth_CalendarUpsertWithoutCalendarEventsInput {
    update: Auth_CalendarUncheckedUpdateWithoutCalendarEventsInput!
    create: Auth_CalendarUncheckedCreateWithoutCalendarEventsInput!
    where: Auth_CalendarWhereInput
  }

  input Auth_CalendarUpdateToOneWithWhereWithoutCalendarEventsInput {
    where: Auth_CalendarWhereInput
    data: Auth_CalendarUncheckedUpdateWithoutCalendarEventsInput!
  }

  input Auth_CalendarUpdateWithoutCalendarEventsInput {
    calendarType: String
    users: Auth_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput
  }

  input Auth_CalendarUncheckedUpdateWithoutCalendarEventsInput {
    id: Int
    calendarType: String
    users: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Auth_CalendarEventUpsertWithoutCalendarInput {
    update: Auth_CalendarEventUncheckedUpdateWithoutCalendarInput!
    create: Auth_CalendarEventUncheckedCreateWithoutCalendarInput!
    where: Auth_CalendarEventWhereInput
  }

  input Auth_CalendarEventUpdateToOneWithWhereWithoutCalendarInput {
    where: Auth_CalendarEventWhereInput
    data: Auth_CalendarEventUncheckedUpdateWithoutCalendarInput!
  }

  input Auth_CalendarEventUpdateWithoutCalendarInput {
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
  }

  input Auth_CalendarEventUncheckedUpdateWithoutCalendarInput {
    id: Int
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
  }

  input Auth_CalendarsOnUsersCreateWithoutCalendarInput {
    user: Auth_UserCreateNestedOneWithoutCalendarsInput!
  }

  input Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarInput {
    userId: Int!
  }

  input Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput {
    where: Auth_CalendarsOnUsersWhereUniqueInput!
    create: Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarInput!
  }

  input Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope {
    data: [Auth_CalendarsOnUsersCreateManyCalendarInput!]!
    skipDuplicates: Boolean
  }

  input Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput {
    calendarEvent: Auth_CalendarEventCreateNestedOneWithoutCalendarInput!
  }

  input Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarInput {
    calendarEventId: Int!
  }

  input Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput {
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    create: Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarInput!
  }

  input Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope {
    data: [Auth_CalendarEventsOnCalendarsCreateManyCalendarInput!]!
    skipDuplicates: Boolean
  }

  input Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput {
    where: Auth_CalendarsOnUsersWhereUniqueInput!
    update: Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput!
    create: Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarInput!
  }

  input Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput {
    where: Auth_CalendarsOnUsersWhereUniqueInput!
    data: Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput!
  }

  input Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput {
    where: Auth_CalendarsOnUsersScalarWhereInput!
    data: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput!
  }

  input Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarInput {
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    update: Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarInput!
    create: Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarInput!
  }

  input Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarInput {
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    data: Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarInput!
  }

  input Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarInput {
    where: Auth_CalendarEventsOnCalendarsScalarWhereInput!
    data: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventsInput!
  }

  input Auth_UserCreateWithoutCalendarsInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileCreateNestedOneWithoutUserInput
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
  }

  input Auth_UserUncheckedCreateWithoutCalendarsInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Auth_UserCreateOrConnectWithoutCalendarsInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutCalendarsInput!
  }

  input Auth_CalendarCreateWithoutUsersInput {
    calendarType: String!
    calendarEvents: Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarInput
  }

  input Auth_CalendarUncheckedCreateWithoutUsersInput {
    id: Int
    calendarType: String!
    calendarEvents: Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarInput
  }

  input Auth_CalendarCreateOrConnectWithoutUsersInput {
    where: Auth_CalendarWhereUniqueInput!
    create: Auth_CalendarUncheckedCreateWithoutUsersInput!
  }

  input Auth_UserUpsertWithoutCalendarsInput {
    update: Auth_UserUncheckedUpdateWithoutCalendarsInput!
    create: Auth_UserUncheckedCreateWithoutCalendarsInput!
    where: Auth_UserWhereInput
  }

  input Auth_UserUpdateToOneWithWhereWithoutCalendarsInput {
    where: Auth_UserWhereInput
    data: Auth_UserUncheckedUpdateWithoutCalendarsInput!
  }

  input Auth_UserUpdateWithoutCalendarsInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUpdateOneWithoutUserNestedInput
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateWithoutCalendarsInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Auth_CalendarUpsertWithoutUsersInput {
    update: Auth_CalendarUncheckedUpdateWithoutUsersInput!
    create: Auth_CalendarUncheckedCreateWithoutUsersInput!
    where: Auth_CalendarWhereInput
  }

  input Auth_CalendarUpdateToOneWithWhereWithoutUsersInput {
    where: Auth_CalendarWhereInput
    data: Auth_CalendarUncheckedUpdateWithoutUsersInput!
  }

  input Auth_CalendarUpdateWithoutUsersInput {
    calendarType: String
    calendarEvents: Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarNestedInput
  }

  input Auth_CalendarUncheckedUpdateWithoutUsersInput {
    id: Int
    calendarType: String
    calendarEvents: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Auth_UsersOnTeamsCreateManyUserInput {
    teamName: String!
    assignedAt: DateTime
  }

  input Auth_CalendarsOnUsersCreateManyUserInput {
    calendarId: Int!
  }

  input Auth_UsersOnTeamsUpdateWithoutUserInput {
    team: Auth_TeamUpdateOneRequiredWithoutUsersNestedInput
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput {
    teamName: String
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput {
    teamName: String
    assignedAt: DateTime
  }

  input Auth_CalendarsOnUsersUpdateWithoutUserInput {
    calendar: Auth_CalendarUpdateOneRequiredWithoutUsersNestedInput
  }

  input Auth_CalendarsOnUsersUncheckedUpdateWithoutUserInput {
    calendarId: Int
  }

  input Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput {
    calendarId: Int
  }

  input Auth_UserUpdateWithoutContactedByInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUpdateOneWithoutUserNestedInput
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
  }

  input Auth_UserUncheckedUpdateWithoutContactedByInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
  }

  input Auth_UserUncheckedUpdateManyWithoutContactedInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UserUpdateWithoutContactedInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUpdateOneWithoutUserNestedInput
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateWithoutContactedInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateManyWithoutContactedByInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UsersOnTeamsCreateManyTeamInput {
    userId: Int!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUpdateWithoutTeamInput {
    user: Auth_UserUpdateOneRequiredWithoutTeamsNestedInput
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput {
    userId: Int
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput {
    userId: Int
    assignedAt: DateTime
  }

  input Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInput {
    calendarId: Int!
  }

  input Auth_CalendarEventsOnCalendarsUpdateWithoutCalendarEventInput {
    calendar: Auth_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput
  }

  input Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarEventInput {
    calendarId: Int
  }

  input Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarInput {
    calendarId: Int
  }

  input Auth_CalendarsOnUsersCreateManyCalendarInput {
    userId: Int!
  }

  input Auth_CalendarEventsOnCalendarsCreateManyCalendarInput {
    calendarEventId: Int!
  }

  input Auth_CalendarsOnUsersUpdateWithoutCalendarInput {
    user: Auth_UserUpdateOneRequiredWithoutCalendarsNestedInput
  }

  input Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput {
    userId: Int
  }

  input Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput {
    userId: Int
  }

  input Auth_CalendarEventsOnCalendarsUpdateWithoutCalendarInput {
    calendarEvent: Auth_CalendarEventUpdateOneRequiredWithoutCalendarNestedInput
  }

  input Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarInput {
    calendarEventId: Int
  }

  input Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventsInput {
    calendarEventId: Int
  }

  type AggregateUser @shareable {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserGroupByOutputType @key(fields: "id") @key(fields: "email") @shareable {
    id: Int!
    createdAt: DateTime!
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateProfile @shareable {
    _count: ProfileCountAggregateOutputType
    _avg: ProfileAvgAggregateOutputType
    _sum: ProfileSumAggregateOutputType
    _min: ProfileMinAggregateOutputType
    _max: ProfileMaxAggregateOutputType
  }

  type ProfileGroupByOutputType @key(fields: "userId") @shareable {
    userId: Int!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
    _count: ProfileCountAggregateOutputType
    _avg: ProfileAvgAggregateOutputType
    _sum: ProfileSumAggregateOutputType
    _min: ProfileMinAggregateOutputType
    _max: ProfileMaxAggregateOutputType
  }

  type AggregateUsersOnTeams @shareable {
    _count: UsersOnTeamsCountAggregateOutputType
    _avg: UsersOnTeamsAvgAggregateOutputType
    _sum: UsersOnTeamsSumAggregateOutputType
    _min: UsersOnTeamsMinAggregateOutputType
    _max: UsersOnTeamsMaxAggregateOutputType
  }

  type UsersOnTeamsGroupByOutputType @key(fields: "teamName userId") @shareable {
    teamName: String!
    userId: Int!
    assignedAt: DateTime!
    _count: UsersOnTeamsCountAggregateOutputType
    _avg: UsersOnTeamsAvgAggregateOutputType
    _sum: UsersOnTeamsSumAggregateOutputType
    _min: UsersOnTeamsMinAggregateOutputType
    _max: UsersOnTeamsMaxAggregateOutputType
  }

  type AggregateTeam @shareable {
    _count: TeamCountAggregateOutputType
    _min: TeamMinAggregateOutputType
    _max: TeamMaxAggregateOutputType
  }

  type TeamGroupByOutputType @key(fields: "teamName") @shareable {
    teamName: String!
    teamType: String
    teamIcon: String
    _count: TeamCountAggregateOutputType
    _min: TeamMinAggregateOutputType
    _max: TeamMaxAggregateOutputType
  }

  type AggregateCalendarEvent @shareable {
    _count: CalendarEventCountAggregateOutputType
    _avg: CalendarEventAvgAggregateOutputType
    _sum: CalendarEventSumAggregateOutputType
    _min: CalendarEventMinAggregateOutputType
    _max: CalendarEventMaxAggregateOutputType
  }

  type CalendarEventGroupByOutputType @key(fields: "id") @shareable {
    id: Int!
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    _count: CalendarEventCountAggregateOutputType
    _avg: CalendarEventAvgAggregateOutputType
    _sum: CalendarEventSumAggregateOutputType
    _min: CalendarEventMinAggregateOutputType
    _max: CalendarEventMaxAggregateOutputType
  }

  type AggregateCalendarEventsOnCalendars @shareable {
    _count: CalendarEventsOnCalendarsCountAggregateOutputType
    _avg: CalendarEventsOnCalendarsAvgAggregateOutputType
    _sum: CalendarEventsOnCalendarsSumAggregateOutputType
    _min: CalendarEventsOnCalendarsMinAggregateOutputType
    _max: CalendarEventsOnCalendarsMaxAggregateOutputType
  }

  type CalendarEventsOnCalendarsGroupByOutputType
    @key(fields: "calendarId calendarEventId")
    @shareable {
    calendarId: Int!
    calendarEventId: Int!
    _count: CalendarEventsOnCalendarsCountAggregateOutputType
    _avg: CalendarEventsOnCalendarsAvgAggregateOutputType
    _sum: CalendarEventsOnCalendarsSumAggregateOutputType
    _min: CalendarEventsOnCalendarsMinAggregateOutputType
    _max: CalendarEventsOnCalendarsMaxAggregateOutputType
  }

  type AggregateCalendar @shareable {
    _count: CalendarCountAggregateOutputType
    _avg: CalendarAvgAggregateOutputType
    _sum: CalendarSumAggregateOutputType
    _min: CalendarMinAggregateOutputType
    _max: CalendarMaxAggregateOutputType
  }

  type CalendarGroupByOutputType @key(fields: "id") @shareable {
    id: Int!
    calendarType: String!
    _count: CalendarCountAggregateOutputType
    _avg: CalendarAvgAggregateOutputType
    _sum: CalendarSumAggregateOutputType
    _min: CalendarMinAggregateOutputType
    _max: CalendarMaxAggregateOutputType
  }

  type AggregateCalendarsOnUsers @shareable {
    _count: CalendarsOnUsersCountAggregateOutputType
    _avg: CalendarsOnUsersAvgAggregateOutputType
    _sum: CalendarsOnUsersSumAggregateOutputType
    _min: CalendarsOnUsersMinAggregateOutputType
    _max: CalendarsOnUsersMaxAggregateOutputType
  }

  type CalendarsOnUsersGroupByOutputType @key(fields: "userId calendarId") @shareable {
    userId: Int!
    calendarId: Int!
    _count: CalendarsOnUsersCountAggregateOutputType
    _avg: CalendarsOnUsersAvgAggregateOutputType
    _sum: CalendarsOnUsersSumAggregateOutputType
    _min: CalendarsOnUsersMinAggregateOutputType
    _max: CalendarsOnUsersMaxAggregateOutputType
  }

  type UserCountOutputType @shareable {
    teams: Int!
    calendars: Int!
    contacted: Int!
    contactedBy: Int!
  }

  type UserCountAggregateOutputType @key(fields: "id") @key(fields: "email") @shareable {
    id: Int!
    createdAt: Int!
    username: Int!
    password: Int!
    email: Int!
    roles: Int!
    googleId: Int!
    googleProfile: Int!
    lastName: Int!
    firstName: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType @key(fields: "id") @shareable {
    id: Float
  }

  type UserSumAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }

  type UserMinAggregateOutputType @key(fields: "id") @key(fields: "email") @shareable {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    lastName: String
    firstName: String
  }

  type UserMaxAggregateOutputType @key(fields: "id") @key(fields: "email") @shareable {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    lastName: String
    firstName: String
  }

  type ProfileCountAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int!
    location: Int!
    joiningDate: Int!
    businessPhone: Int!
    mobilePhone: Int!
    kakaoTalkId: Int!
    designation: Int!
    profileImg: Int!
    designationIcon: Int!
    coverImg: Int!
    _all: Int!
  }

  type ProfileAvgAggregateOutputType @key(fields: "userId") @shareable {
    userId: Float
  }

  type ProfileSumAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
  }

  type ProfileMinAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type ProfileMaxAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type UsersOnTeamsCountAggregateOutputType @key(fields: "teamName userId") @shareable {
    teamName: Int!
    userId: Int!
    assignedAt: Int!
    _all: Int!
  }

  type UsersOnTeamsAvgAggregateOutputType @shareable {
    userId: Float
  }

  type UsersOnTeamsSumAggregateOutputType @shareable {
    userId: Int
  }

  type UsersOnTeamsMinAggregateOutputType @key(fields: "teamName userId") @shareable {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  type UsersOnTeamsMaxAggregateOutputType @key(fields: "teamName userId") @shareable {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  type TeamCountOutputType @shareable {
    users: Int!
  }

  type TeamCountAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: Int!
    teamType: Int!
    teamIcon: Int!
    _all: Int!
  }

  type TeamMinAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
    teamType: String
    teamIcon: String
  }

  type TeamMaxAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
    teamType: String
    teamIcon: String
  }

  type CalendarEventCountOutputType @shareable {
    calendar: Int!
  }

  type CalendarEventCountAggregateOutputType @key(fields: "id") @shareable {
    id: Int!
    url: Int!
    title: Int!
    start: Int!
    end: Int!
    allDay: Int!
    _all: Int!
  }

  type CalendarEventAvgAggregateOutputType @key(fields: "id") @shareable {
    id: Float
  }

  type CalendarEventSumAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }

  type CalendarEventMinAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
  }

  type CalendarEventMaxAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
  }

  type CalendarEventsOnCalendarsCountAggregateOutputType
    @key(fields: "calendarId calendarEventId")
    @shareable {
    calendarId: Int!
    calendarEventId: Int!
    _all: Int!
  }

  type CalendarEventsOnCalendarsAvgAggregateOutputType
    @key(fields: "calendarId calendarEventId")
    @shareable {
    calendarId: Float
    calendarEventId: Float
  }

  type CalendarEventsOnCalendarsSumAggregateOutputType
    @key(fields: "calendarId calendarEventId")
    @shareable {
    calendarId: Int
    calendarEventId: Int
  }

  type CalendarEventsOnCalendarsMinAggregateOutputType
    @key(fields: "calendarId calendarEventId")
    @shareable {
    calendarId: Int
    calendarEventId: Int
  }

  type CalendarEventsOnCalendarsMaxAggregateOutputType
    @key(fields: "calendarId calendarEventId")
    @shareable {
    calendarId: Int
    calendarEventId: Int
  }

  type CalendarCountOutputType @shareable {
    users: Int!
    calendarEvents: Int!
  }

  type CalendarCountAggregateOutputType @key(fields: "id") @shareable {
    id: Int!
    calendarType: Int!
    _all: Int!
  }

  type CalendarAvgAggregateOutputType @key(fields: "id") @shareable {
    id: Float
  }

  type CalendarSumAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }

  type CalendarMinAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    calendarType: String
  }

  type CalendarMaxAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    calendarType: String
  }

  type CalendarsOnUsersCountAggregateOutputType @key(fields: "userId calendarId") @shareable {
    userId: Int!
    calendarId: Int!
    _all: Int!
  }

  type CalendarsOnUsersAvgAggregateOutputType @key(fields: "userId calendarId") @shareable {
    userId: Float
    calendarId: Float
  }

  type CalendarsOnUsersSumAggregateOutputType @key(fields: "userId calendarId") @shareable {
    userId: Int
    calendarId: Int
  }

  type CalendarsOnUsersMinAggregateOutputType @key(fields: "userId calendarId") @shareable {
    userId: Int
    calendarId: Int
  }

  type CalendarsOnUsersMaxAggregateOutputType @key(fields: "userId calendarId") @shareable {
    userId: Int
    calendarId: Int
  }

  type TransactionSucceeded @shareable {
    transactionSucceeded: Boolean!
  }

  input Auth_createOneUserInput {
    data: Auth_UserCreateInput
  }

  input Auth_upsertOneUserInput {
    where: Auth_UserWhereUniqueInput
    create: Auth_UserCreateInput
    update: Auth_UserUpdateInput
  }

  input Auth_createManyUserInput {
    data: [Auth_UserCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneUserInput {
    where: Auth_UserWhereUniqueInput
  }

  input Auth_updateOneUserInput {
    data: Auth_UserUpdateInput
    where: Auth_UserWhereUniqueInput
  }

  input Auth_updateManyUserInput {
    data: Auth_UserUpdateManyMutationInput
    where: Auth_UserWhereInput
  }

  input Auth_deleteManyUserInput {
    where: Auth_UserWhereInput
  }

  input Auth_createOneProfileInput {
    data: Auth_ProfileCreateInput
  }

  input Auth_upsertOneProfileInput {
    where: Auth_ProfileWhereUniqueInput
    create: Auth_ProfileCreateInput
    update: Auth_ProfileUpdateInput
  }

  input Auth_createManyProfileInput {
    data: [Auth_ProfileCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneProfileInput {
    where: Auth_ProfileWhereUniqueInput
  }

  input Auth_updateOneProfileInput {
    data: Auth_ProfileUpdateInput
    where: Auth_ProfileWhereUniqueInput
  }

  input Auth_updateManyProfileInput {
    data: Auth_ProfileUpdateManyMutationInput
    where: Auth_ProfileWhereInput
  }

  input Auth_deleteManyProfileInput {
    where: Auth_ProfileWhereInput
  }

  input Auth_createOneUsersOnTeamsInput {
    data: Auth_UsersOnTeamsCreateInput
  }

  input Auth_upsertOneUsersOnTeamsInput {
    where: Auth_UsersOnTeamsWhereUniqueInput
    create: Auth_UsersOnTeamsCreateInput
    update: Auth_UsersOnTeamsUpdateInput
  }

  input Auth_createManyUsersOnTeamsInput {
    data: [Auth_UsersOnTeamsCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneUsersOnTeamsInput {
    where: Auth_UsersOnTeamsWhereUniqueInput
  }

  input Auth_updateOneUsersOnTeamsInput {
    data: Auth_UsersOnTeamsUpdateInput
    where: Auth_UsersOnTeamsWhereUniqueInput
  }

  input Auth_updateManyUsersOnTeamsInput {
    data: Auth_UsersOnTeamsUpdateManyMutationInput
    where: Auth_UsersOnTeamsWhereInput
  }

  input Auth_deleteManyUsersOnTeamsInput {
    where: Auth_UsersOnTeamsWhereInput
  }

  input Auth_createOneTeamInput {
    data: Auth_TeamCreateInput
  }

  input Auth_upsertOneTeamInput {
    where: Auth_TeamWhereUniqueInput
    create: Auth_TeamCreateInput
    update: Auth_TeamUpdateInput
  }

  input Auth_createManyTeamInput {
    data: [Auth_TeamCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneTeamInput {
    where: Auth_TeamWhereUniqueInput
  }

  input Auth_updateOneTeamInput {
    data: Auth_TeamUpdateInput
    where: Auth_TeamWhereUniqueInput
  }

  input Auth_updateManyTeamInput {
    data: Auth_TeamUpdateManyMutationInput
    where: Auth_TeamWhereInput
  }

  input Auth_deleteManyTeamInput {
    where: Auth_TeamWhereInput
  }

  input Auth_createOneCalendarEventInput {
    data: Auth_CalendarEventCreateInput
  }

  input Auth_upsertOneCalendarEventInput {
    where: Auth_CalendarEventWhereUniqueInput
    create: Auth_CalendarEventCreateInput
    update: Auth_CalendarEventUpdateInput
  }

  input Auth_createManyCalendarEventInput {
    data: [Auth_CalendarEventCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneCalendarEventInput {
    where: Auth_CalendarEventWhereUniqueInput
  }

  input Auth_updateOneCalendarEventInput {
    data: Auth_CalendarEventUpdateInput
    where: Auth_CalendarEventWhereUniqueInput
  }

  input Auth_updateManyCalendarEventInput {
    data: Auth_CalendarEventUpdateManyMutationInput
    where: Auth_CalendarEventWhereInput
  }

  input Auth_deleteManyCalendarEventInput {
    where: Auth_CalendarEventWhereInput
  }

  input Auth_createOneCalendarEventsOnCalendarsInput {
    data: Auth_CalendarEventsOnCalendarsCreateInput
  }

  input Auth_upsertOneCalendarEventsOnCalendarsInput {
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput
    create: Auth_CalendarEventsOnCalendarsCreateInput
    update: Auth_CalendarEventsOnCalendarsUpdateInput
  }

  input Auth_createManyCalendarEventsOnCalendarsInput {
    data: [Auth_CalendarEventsOnCalendarsCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneCalendarEventsOnCalendarsInput {
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput
  }

  input Auth_updateOneCalendarEventsOnCalendarsInput {
    data: Auth_CalendarEventsOnCalendarsUpdateInput
    where: Auth_CalendarEventsOnCalendarsWhereUniqueInput
  }

  input Auth_deleteManyCalendarEventsOnCalendarsInput {
    where: Auth_CalendarEventsOnCalendarsWhereInput
  }

  input Auth_createOneCalendarInput {
    data: Auth_CalendarCreateInput
  }

  input Auth_upsertOneCalendarInput {
    where: Auth_CalendarWhereUniqueInput
    create: Auth_CalendarCreateInput
    update: Auth_CalendarUpdateInput
  }

  input Auth_createManyCalendarInput {
    data: [Auth_CalendarCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneCalendarInput {
    where: Auth_CalendarWhereUniqueInput
  }

  input Auth_updateOneCalendarInput {
    data: Auth_CalendarUpdateInput
    where: Auth_CalendarWhereUniqueInput
  }

  input Auth_updateManyCalendarInput {
    data: Auth_CalendarUpdateManyMutationInput
    where: Auth_CalendarWhereInput
  }

  input Auth_deleteManyCalendarInput {
    where: Auth_CalendarWhereInput
  }

  input Auth_createOneCalendarsOnUsersInput {
    data: Auth_CalendarsOnUsersCreateInput
  }

  input Auth_upsertOneCalendarsOnUsersInput {
    where: Auth_CalendarsOnUsersWhereUniqueInput
    create: Auth_CalendarsOnUsersCreateInput
    update: Auth_CalendarsOnUsersUpdateInput
  }

  input Auth_createManyCalendarsOnUsersInput {
    data: [Auth_CalendarsOnUsersCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneCalendarsOnUsersInput {
    where: Auth_CalendarsOnUsersWhereUniqueInput
  }

  input Auth_updateOneCalendarsOnUsersInput {
    data: Auth_CalendarsOnUsersUpdateInput
    where: Auth_CalendarsOnUsersWhereUniqueInput
  }

  input Auth_deleteManyCalendarsOnUsersInput {
    where: Auth_CalendarsOnUsersWhereInput
  }

  input Auth_transactionalMutationInput {
    Auth_createOneUser: Auth_createOneUserInput
    Auth_upsertOneUser: Auth_upsertOneUserInput
    Auth_createManyUser: Auth_createManyUserInput
    Auth_deleteOneUser: Auth_deleteOneUserInput
    Auth_updateOneUser: Auth_updateOneUserInput
    Auth_updateManyUser: Auth_updateManyUserInput
    Auth_deleteManyUser: Auth_deleteManyUserInput
    Auth_createOneProfile: Auth_createOneProfileInput
    Auth_upsertOneProfile: Auth_upsertOneProfileInput
    Auth_createManyProfile: Auth_createManyProfileInput
    Auth_deleteOneProfile: Auth_deleteOneProfileInput
    Auth_updateOneProfile: Auth_updateOneProfileInput
    Auth_updateManyProfile: Auth_updateManyProfileInput
    Auth_deleteManyProfile: Auth_deleteManyProfileInput
    Auth_createOneUsersOnTeams: Auth_createOneUsersOnTeamsInput
    Auth_upsertOneUsersOnTeams: Auth_upsertOneUsersOnTeamsInput
    Auth_createManyUsersOnTeams: Auth_createManyUsersOnTeamsInput
    Auth_deleteOneUsersOnTeams: Auth_deleteOneUsersOnTeamsInput
    Auth_updateOneUsersOnTeams: Auth_updateOneUsersOnTeamsInput
    Auth_updateManyUsersOnTeams: Auth_updateManyUsersOnTeamsInput
    Auth_deleteManyUsersOnTeams: Auth_deleteManyUsersOnTeamsInput
    Auth_createOneTeam: Auth_createOneTeamInput
    Auth_upsertOneTeam: Auth_upsertOneTeamInput
    Auth_createManyTeam: Auth_createManyTeamInput
    Auth_deleteOneTeam: Auth_deleteOneTeamInput
    Auth_updateOneTeam: Auth_updateOneTeamInput
    Auth_updateManyTeam: Auth_updateManyTeamInput
    Auth_deleteManyTeam: Auth_deleteManyTeamInput
    Auth_createOneCalendarEvent: Auth_createOneCalendarEventInput
    Auth_upsertOneCalendarEvent: Auth_upsertOneCalendarEventInput
    Auth_createManyCalendarEvent: Auth_createManyCalendarEventInput
    Auth_deleteOneCalendarEvent: Auth_deleteOneCalendarEventInput
    Auth_updateOneCalendarEvent: Auth_updateOneCalendarEventInput
    Auth_updateManyCalendarEvent: Auth_updateManyCalendarEventInput
    Auth_deleteManyCalendarEvent: Auth_deleteManyCalendarEventInput
    Auth_createOneCalendarEventsOnCalendars: Auth_createOneCalendarEventsOnCalendarsInput
    Auth_upsertOneCalendarEventsOnCalendars: Auth_upsertOneCalendarEventsOnCalendarsInput
    Auth_createManyCalendarEventsOnCalendars: Auth_createManyCalendarEventsOnCalendarsInput
    Auth_deleteOneCalendarEventsOnCalendars: Auth_deleteOneCalendarEventsOnCalendarsInput
    Auth_updateOneCalendarEventsOnCalendars: Auth_updateOneCalendarEventsOnCalendarsInput
    Auth_deleteManyCalendarEventsOnCalendars: Auth_deleteManyCalendarEventsOnCalendarsInput
    Auth_createOneCalendar: Auth_createOneCalendarInput
    Auth_upsertOneCalendar: Auth_upsertOneCalendarInput
    Auth_createManyCalendar: Auth_createManyCalendarInput
    Auth_deleteOneCalendar: Auth_deleteOneCalendarInput
    Auth_updateOneCalendar: Auth_updateOneCalendarInput
    Auth_updateManyCalendar: Auth_updateManyCalendarInput
    Auth_deleteManyCalendar: Auth_deleteManyCalendarInput
    Auth_createOneCalendarsOnUsers: Auth_createOneCalendarsOnUsersInput
    Auth_upsertOneCalendarsOnUsers: Auth_upsertOneCalendarsOnUsersInput
    Auth_createManyCalendarsOnUsers: Auth_createManyCalendarsOnUsersInput
    Auth_deleteOneCalendarsOnUsers: Auth_deleteOneCalendarsOnUsersInput
    Auth_updateOneCalendarsOnUsers: Auth_updateOneCalendarsOnUsersInput
    Auth_deleteManyCalendarsOnUsers: Auth_deleteManyCalendarsOnUsersInput
  }
`;
