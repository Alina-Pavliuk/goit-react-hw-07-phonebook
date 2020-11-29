import React from 'react';

import styles from './ContactItem.module.css'


const ContactItem = ({ id, name, number, removeContact }) => (
  <li className={styles.contactItem}>
    <p className={styles.paragraph}>{name}: {number}</p>
    <button
      className={styles.removeBtn}
      type="button"
      onClick={removeContact(id)}>
      X
    </button>
  </li>
);

export default ContactItem;

