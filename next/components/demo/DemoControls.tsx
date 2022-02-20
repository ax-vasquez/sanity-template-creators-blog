import { FunctionComponent, useState } from 'react'
import TitledCard from "../layout/TitledCard"
import Checkbox from '../util/controls/Checkbox'
import Input from '../util/controls/Input'
import Radio from '../util/controls/Radio'
import LabeledControl from '../util/fields/LabeledControl'
import SectionHeader from "./common/SectionHeader"

const DemoControls: FunctionComponent = ({}) => {
    const [radioSelected, setRadioSelected] = useState(false)
    const [checkboxSelected, setCheckboxSelected] = useState(false)
    const [inputText, setInputText] = useState(``)

    const onRadioChange = (e: any) => {
        setRadioSelected(!radioSelected)
    }

    const onCheckboxChange = (e: any) => {
        setCheckboxSelected(!checkboxSelected)
    }

    const onInputChange = (e: any) => {
        setInputText(e.target.value)
    }

    return (
        <section
            id="demo-controls"
        >
            <TitledCard title="Controls"
                description={
                    <>
                        Styles for controls are located in two places - one is within <code>./next/styles/_general.scss</code>, and the other is in <code>./next/styles/_bootstrap.scss</code>. The reason for this 
                        difference because <b>not all control types can are fully-customizable.</b> Specifically, radio buttons and checkboxes offer very limited customization options out-of-the-box. This is the 
                        reason for the bootstrap-specific stylesheet; we use <code>react-bootstrap</code> under the hood for many components, including the radio and checkbox inputs. Text inputs, however, are styled
                        with "vanilla" CSS.
                    </>
                }
            >
                <SectionHeader sectionTitle="Radio Control"/>
                <LabeledControl 
                    label='Label Right'
                    labelPos='right'
                    component={(
                        <Radio 
                            id={`label-right-radio`}
                            checked={radioSelected}
                            onClick={onRadioChange}
                        />
                    )}
                />
                <LabeledControl 
                    label='Label Left'
                    labelPos='left'
                    component={(
                        <Radio 
                            id={`label-left-radio`}
                            checked={radioSelected}
                            onClick={onRadioChange}
                        />
                    
                    )}
                />
                <SectionHeader sectionTitle="Check box"/>
                <LabeledControl 
                    label='Label Right'
                    labelPos='right'
                    component={(
                        <Checkbox 
                            id={`label-right-checkbox`}
                            checked={checkboxSelected}
                            onClick={onCheckboxChange}
                        />
                    )}
                />
                <LabeledControl 
                    label='Label Left'
                    labelPos='left'
                    component={(
                        <Checkbox 
                            id={`label-left-checkbox`}
                            checked={checkboxSelected}
                            onClick={onCheckboxChange}
                        />
                    )}
                />
                <SectionHeader sectionTitle="Inputs"/>
                <Input 
                    placeholder='Demo input 1'
                    ariaLabel='Demo input 1'
                    ariaDescribedBy='controls-demo'
                />
                <Input 
                    placeholder='Demo input 2'
                    ariaLabel='Demo input 2'
                    ariaDescribedBy='controls-demo'
                    preSegment='Some label'
                />
                <Input 
                    placeholder='Demo input 3'
                    ariaLabel='Demo input 3'
                    ariaDescribedBy='controls-demo'
                    postSegment='Some label'
                />
                <Input 
                    placeholder='Demo input 4'
                    ariaLabel='Demo input 4'
                    ariaDescribedBy='controls-demo'
                    preSegment='Some label'
                    postSegment='Some label'
                />
            </TitledCard>
        </section>
        
    )
}

export default DemoControls
