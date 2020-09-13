import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {PanelApiCvExportPdfService} from '../../../services/panel-api-services/panel-api-cv-export-pdf.service';

@Component({
  selector: 'app-cv-app-export',
  templateUrl: './cv-app-export.component.html',
  styleUrls: ['./cv-app-export.component.css']
})
export class CvAppExportComponent implements OnInit {

  private _pdfFile: any;
  private _errorPDF = null;
  private _loaded: boolean;

  constructor(private sanitizer: DomSanitizer, private panelApiExportPdf: PanelApiCvExportPdfService) {
  }

  ngOnInit() {
    this.loadPDFFile();
  }

  loadPDFFile() {
    this.panelApiExportPdf.getPDF().subscribe(
      next => this.pdfFile = next,
      (error) => {
        this.loaded = true;
        this.errorPDF = error;
        console.log(error);
      }
    )
  }

  get pdfFile(): any {
    return this._pdfFile;
  }

  set pdfFile(value: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.pdfFile = reader.result;
      this.loaded = true;
    }, false);

    if (value) {
      this._pdfFile = value;
      if (typeof value !== 'string') {
        reader.readAsDataURL(value);
      }
    }

  }

  sanitize(url: string) {
    return url ? this.sanitizer.bypassSecurityTrustUrl(url) : null;
  }

  get errorPDF(): any {
    return this._errorPDF;
  }

  set errorPDF(value: any) {
    this._errorPDF = value;
  }

  get loaded(): boolean {
    return this._loaded;
  }

  set loaded(value: boolean) {
    this._loaded = value;
    /**
     * Download from chat
     */
    if (this.loaded && document.location.hash === '#download') {
      console.log('Downloading...');
      setTimeout(
        () => {
          document.getElementById('download-link').click();
        },
        1000
      );
    }
  }
}
