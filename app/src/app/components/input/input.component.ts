import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements ControlValueAccessor  {

    @Input() name: string;
    @Input() label: string;
    @Input() type = 'text';

    private inputValue: any = '';

    private onTouchedCallback: () => void;
    private onChangeCallback: (_: any) => void;

    get value(): any {
        return this.inputValue;
    };
    set value(v: any) {
        if (v !== this.inputValue) {
            this.inputValue = v;
            this.onChangeCallback(v);
        }
    }

    onBlur() {
        this.onTouchedCallback();
    }

    writeValue(value: any) {
        if (value !== this.inputValue) {
            this.inputValue = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
