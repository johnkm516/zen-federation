import gql from 'graphql-tag';

export const CalendarEventFields = gql`
  fragment CalendarEventFields on CalendarEvent {
    id
    # TODO: Add fields
  }
`;
