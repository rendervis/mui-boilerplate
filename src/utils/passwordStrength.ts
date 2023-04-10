/**
 * Password validator for login pages
 */

import { success, orange, error } from '@components/theme/colors';

// has number
const hasNumber = (n: string) => new RegExp(/[0-9]/).test(n);

// has mix of small and capitals
const hasMixed = (n: string) => new RegExp(/[a-z]/).test(n) && new RegExp(/[A-Z]/).test(n);

// has special chars
const hasSpecial = (n: string) => new RegExp(/[!#@$%^&*)(+=._-]/).test(n);

export type PasswordStrength = 'Poor' | 'Weak' | 'Normal' | 'Good' | 'Strong';
export type PasswordLevel = {
    label: PasswordStrength;
    color: string;
};
// set color based on password strength
export const strengthColor = (count: number): PasswordLevel => {
    if (count < 2) return { label: 'Poor', color: error.main };
    if (count < 3) return { label: 'Weak', color: orange.dark };
    if (count < 4) return { label: 'Normal', color: orange.main };
    if (count < 5) return { label: 'Good', color: success.main };
    if (count < 6) return { label: 'Strong', color: success.dark };
    return { label: 'Poor', color: error.main };
};

// password strength indicator
export const strengthIndicator = (n: string): number => {
    let strengths = 0;
    if (n.length > 5) strengths += 1;
    if (n.length > 7) strengths += 1;
    if (hasNumber(n)) strengths += 1;
    if (hasSpecial(n)) strengths += 1;
    if (hasMixed(n)) strengths += 1;
    return strengths;
};
