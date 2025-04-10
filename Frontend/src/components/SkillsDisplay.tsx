import React from 'react'
import { useFetch } from '../hooks/useFetch'

function SkillsDisplay() {
    const { data, isPending, error } = useFetch("/api/skills")

    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="mt-4 space-y-4">
                {isPending && <div>loading...</div>}
                {!isPending && data && data.length > 0 ? (
                    data.map(({ skill, level }: any) => (
                        <li key={skill}>
                            <div className="flex justify-between items-center">
                                <span>{skill}</span>
                                <span className="text-gray-500 text-sm">{level}/10</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-md">
                                <div
                                    className="bg-blue-500 h-2 rounded-md"
                                    style={{ width: `${level * 10}%` }}
                                ></div>
                            </div>
                        </li>
                    ))
                ) : (
                    !isPending && <div>No skills available</div>
                )}
            </ul>
        </div>
    )
}

export default SkillsDisplay
