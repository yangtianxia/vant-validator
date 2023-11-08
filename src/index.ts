import type { Ref } from 'vue'
import type { ValidatorRules, ValidatorRule as _ValidatorRule, Rule as _Rule } from '@txjs/validator'
import { Validator, type BaseTrigger } from './validator'

const instance = new Validator()

instance.setTrigger('onChange')

const validator = Object.assign(
	(options: ValidatorRules<BaseTrigger>) => instance.init(options),
	instance
)

Object.setPrototypeOf(validator, Object.getPrototypeOf(instance))

export type ValidatorRule = _ValidatorRule<BaseTrigger, Ref<Error>>
export type Rule = _Rule<BaseTrigger>

export { validator, type BaseTrigger }
export default Validator