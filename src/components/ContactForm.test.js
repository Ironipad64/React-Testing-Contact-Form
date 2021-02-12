import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from './ContactForm'

test("renders without errors", () => {
    render(<ContactForm />);
});

test("form is filled out and submit adds new person", () => {
    // render
    render(<ContactForm />);

    // query for all inputs
    const firstNameInput = screen.getByLabelText(/first/i);
    const lastNameInput = screen.getByLabelText(/last/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    // type into inputs
    userEvent.type(firstNameInput, "Ismael");
    userEvent.type(lastNameInput, "Hernandez");
    userEvent.type(emailInput, "ironipad64@gmail.com");
    userEvent.type(messageInput, "I shall bring justice upon them");

    // negative assertion
    const noIsmaelText = screen.queryByText(/ismael/i);
    // expect(noTigerText).not.toBeNull(); 

    // query for the button
    const button = screen.getByRole("button", { name: /submit/i });

    // click button
    userEvent.click(button);

    // query for the text "tiger"
    const ismaelText = screen.queryByText(/ismael/i)

    // assert
    expect(ismaelText).toBeInTheDocument();



})

