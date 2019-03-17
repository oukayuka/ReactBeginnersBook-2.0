import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Members, { MembersProps } from '../components/Members';
import { User } from '../services/github/models';
import { GithubState } from '../reducer';
import { getMembers } from '../actions/github';

interface StateProps {
  users: User[];
  isLoading?: boolean;
}

interface DispatchProps {
  getMembersStart: (companyName: string) => void;
}

type EnhancedMembersProps = MembersProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{ companyName: string }>;

const mapStateToProps = (state: GithubState): StateProps => ({
  users: state.users,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getMembersStart: (companyName: string) =>
        getMembers.start({ companyName }),
    },
    dispatch,
  );

const MembersContainer: FC<EnhancedMembersProps> = ({
  users,
  isLoading,
  getMembersStart,
  match,
}) => {
  const { companyName } = match.params;

  useEffect(() => {
    getMembersStart(companyName);
  }, []);

  return (
    <Members companyName={companyName} users={users} isLoading={isLoading} />
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MembersContainer),
);
