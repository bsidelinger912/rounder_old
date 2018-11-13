/**
 * @class MyProfilesContent
 * @description 
 */

import * as React from 'react';

import { IProfile } from 'src/api/app/schemas/profile/types';
import ProfileItem from './ProfileItem';
import NewProfileButton from 'src/web/components/NewProfileButton';

const styles = require('./myProfiles.scss');

export interface Props {
  profiles: IProfile[];
}

const MyProfilesContent: React.SFC<Props> = ({ profiles }) => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <div>
          <h3 className={styles.pageHeaderTitle}>My Profiles</h3>
          <NewProfileButton />
        </div>
      </div>
      <div className={styles.main}>
        {profiles.map(profile => <ProfileItem key={profile.id} {...profile} />)}
      </div>
    </div>
  );
};

export default MyProfilesContent;
