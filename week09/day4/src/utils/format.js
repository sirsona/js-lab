
export function formatCurrency(cents) {
    return `KSh ${new Intl.NumberFormat().format(cents / 100)}`;
}