const currencyFormatGB = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });

export const currencyFormatter = (amount: number) => {
    return currencyFormatGB.format(amount);
}