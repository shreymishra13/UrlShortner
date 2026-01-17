import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { Form } from "./components/form/form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'snapUrl-ng';
}
