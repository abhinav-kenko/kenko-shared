
import { CollectionOf, Description, Enum, MaxLength, MinLength, Nullable, Property, Required } from "@tsed/schema";
import { AnswerTypeEnum } from "../enum/quiz.enum";
import { Validation } from "./validations.req";

class SQOption {

    @Property()
    @Required()
    displayName: string;


    @Property()
    @Required()
    isRedFlagOption: boolean;


    @Property()
    @Required()
    @Description("user score when he is selecting this option")
    selectScore: number;


}

export class SimpleQuestionCreateDetails {


    @Property()
    @Required()
    @MinLength(0)
    name: string;

    @Property()
    @Required(true, null)
    @Nullable(String)
    description: string | null;

    @Property()
    @Required(true, null)
    @Nullable(String)
    individual: string | null;

    @Property()
    @Required(true, null)
    @Nullable(String)
    nonIndividual: string | null;


    @Property()
    @Required()
    @Description("used while making questionaire , all key will be this column name only")
    @MinLength(3)
    @MaxLength(30)
    columnName: string;


    @Property()
    @Enum(AnswerTypeEnum)
    @Required()
    @Description("number / options / etc ...")
    answerType: AnswerTypeEnum;


    @Property()
    @Required()
    @Description("red flag questions")
    isRedFlag: boolean;


    @Property()
    @Required(true, null)
    @Description("for NUMERIC , NUMERIC-RANGE , TEXT answer-type only ")
    validation: Validation | null;

    @Property()
    @Required()
    @CollectionOf(SQOption)
    @Description("set of possible answers/options")
    possibleOptions: SQOption[];


}