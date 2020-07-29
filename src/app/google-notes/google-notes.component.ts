import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-google-notes',
  templateUrl: './google-notes.component.html',
  styleUrls: ['./google-notes.component.css'],
})
export class GoogleNotesComponent implements OnInit {
  @ViewChild('mynote') mynote: ElementRef;
  openCard: boolean = false;
  noteForm:FormGroup
  noteDatas=[];
  constructor(private fb:FormBuilder) {
    this.noteForm=this.fb.group({
      title:[''],
      content:['',Validators.required],
      time:['']
    })
  }

  ngOnInit(): void {
    // localStorage.removeItem("noteData");

    let data=JSON.parse(localStorage.getItem('noteData'));
    if(data){
      this.noteDatas=data;
    }
  }
  ngAfterViewInit() {
    document.addEventListener('click', (event) => {
      if (!this.mynote.nativeElement.contains(event.target)) {
        if (this.openCard == true) {
          this.openCard = false;
          if(this.noteForm.valid){ 
            this.storeNote(this.noteForm.value).then(()=>{
              this.noteForm.reset();

            }).catch(err=>err);
          }
        }
      }
    });
  }
  openNoteEditor() {
    this.openCard = true;
  }
 storeNote(formValue:Object){
   return new Promise((resolve)=>{
    this.noteDatas.push(formValue);
    localStorage.setItem('noteData', JSON.stringify(this.noteDatas));
    resolve();
   })
 }
}
