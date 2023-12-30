import Users from '@/components/Users/Users';
import React from 'react';
import styles from './Users.module.css'

const UsersPage = () => {
    return (
        <div>
            <h2 className={styles.header_text}>Another haeder</h2>
            <Users/>
        </div>
    );
};

export default UsersPage;