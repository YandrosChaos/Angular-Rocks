import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Band } from '../../../models/band';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  band: Band = new Band();

  constructor(
    private dialogRef: MatDialogRef<AddComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      formedIn: [
        1970,
        [Validators.required, Validators.pattern('[1|2]{1}[8|9]{1}[0-9]{2}')],
      ],
      isActive: [false.valueOf, [Validators.required]],
      description: [''],
      videoLink: [
        '',
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ],
      imageLink: [
        '',
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ],
    });
  }

  ngOnInit(): void {}

  onSave() {
    if (!this.band.videoLink) {
      this.band.videoLink = 'https://www.youtube.com/watch?v=2Z4m4lnjxkY';
    }

    if (!this.band.imgLink) {
      this.band.imgLink =
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-XB85UD145qE%2FV5buf22iv2I%2FAAAAAAAAA1I%2F8LBmpwNX-rU7ZjzrHOS2b0F_Pj0xqpHIQCLcB%2Fs1600%2Fnia.png&f=1&nofb=1';
    }

    if (!this.band.description) {
      this.band.description =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend sapien eros, volutpat imperdiet neque fringilla sit amet. Morbi vel risus eu diam posuere molestie eget in felis. Curabitur rhoncus aliquet ultricies. Aenean aliquet quis magna non congue. Duis ut nisi nibh. Fusce efficitur vitae mi eget vestibulum. Suspendisse eu neque ullamcorper, fermentum turpis sed, iaculis massa. Donec ut aliquet felis. Ut dignissim, lorem eu elementum finibus, lacus magna semper enim, in aliquet dolor odio sit amet augue.';
    }
    this.dialogRef.close(this.band);
  }

  onClose() {
    this.dialogRef.close();
  }

  isValidInput(fieldName: string): boolean {
    return (
      this.form.controls[fieldName].invalid &&
      (this.form.controls[fieldName].dirty ||
        this.form.controls[fieldName].touched)
    );
  }
}
