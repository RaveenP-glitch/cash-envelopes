import userEvent from '@testing-library/react';

test('complete form', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "Trevor");

    const submitButton = screen.getByRole(
        'button',
        { name: /submit/i });

    await user.click(submitButton);

    //assert something
});