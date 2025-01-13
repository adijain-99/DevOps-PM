import { useState } from 'react'
import { Button } from "/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card"
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

// Sample data for DevOps projects
const devOpsProjects = [
  {
    id: 1,
    title: "CI/CD Pipeline Setup",
    description: "Set up a CI/CD pipeline using Jenkins.",
    steps: [
      "Install Jenkins.",
      "Configure Jenkins jobs.",
      "Set up version control integration.",
      "Test the pipeline."
    ]
  },
  {
    id: 2,
    title: "Kubernetes Cluster Setup",
    description: "Set up a Kubernetes cluster using Minikube.",
    steps: [
      "Install Minikube.",
      "Start a Minikube cluster.",
      "Deploy a sample application.",
      "Verify the deployment."
    ]
  },
  {
    id: 3,
    title: "Docker Containerization",
    description: "Containerize a simple application using Docker.",
    steps: [
      "Install Docker.",
      "Write a Dockerfile.",
      "Build the Docker image.",
      "Run the Docker container."
    ]
  },
  {
    id: 4,
    title: "Terraform Infrastructure as Code",
    description: "Set up infrastructure using Terraform.",
    steps: [
      "Install Terraform.",
      "Write a Terraform configuration file.",
      "Initialize Terraform.",
      "Apply the configuration."
    ]
  },
  {
    id: 5,
    title: "Ansible Automation",
    description: "Automate server configuration using Ansible.",
    steps: [
      "Install Ansible.",
      "Write an Ansible playbook.",
      "Run the playbook on a target server.",
      "Verify the configuration."
    ]
  },
  {
    id: 6,
    title: "Monitoring with Prometheus",
    description: "Set up monitoring using Prometheus and Grafana.",
    steps: [
      "Install Prometheus.",
      "Configure Prometheus to scrape metrics.",
      "Install Grafana.",
      "Create dashboards in Grafana."
    ]
  },
  {
    id: 7,
    title: "Logging with ELK Stack",
    description: "Set up logging using the ELK stack (Elasticsearch, Logstash, Kibana).",
    steps: [
      "Install Elasticsearch.",
      "Install Logstash.",
      "Install Kibana.",
      "Configure Logstash to collect logs."
    ]
  },
  {
    id: 8,
    title: "Security with Istio",
    description: "Set up service mesh security using Istio.",
    steps: [
      "Install Istio.",
      "Deploy a sample application.",
      "Configure Istio security policies.",
      "Test security features."
    ]
  },
  {
    id: 9,
    title: "Configuration Management with Chef",
    description: "Automate server configuration using Chef.",
    steps: [
      "Install Chef.",
      "Write Chef recipes.",
      "Run Chef on a target server.",
      "Verify the configuration."
    ]
  },
  {
    id: 10,
    title: "Container Orchestration with Docker Swarm",
    description: "Set up container orchestration using Docker Swarm.",
    steps: [
      "Install Docker.",
      "Initialize a Docker Swarm.",
      "Deploy services to the Swarm.",
      "Verify the deployment."
    ]
  },
  {
    id: 11,
    title: "Service Mesh with Linkerd",
    description: "Set up a service mesh using Linkerd.",
    steps: [
      "Install Linkerd.",
      "Deploy a sample application.",
      "Configure Linkerd.",
      "Test the service mesh."
    ]
  },
  {
    id: 12,
    title: "Backup and Recovery with Velero",
    description: "Set up backup and recovery using Velero.",
    steps: [
      "Install Velero.",
      "Configure Velero to use a storage provider.",
      "Create a backup.",
      "Test the recovery process."
    ]
  }
]

export default function DevOpsProjects() {
  const [currentProject, setCurrentProject] = useState<number | null>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const handleProjectClick = (projectId: number) => {
    setCurrentProject(projectId)
    setCurrentStep(0)
  }

  const handleBackToProjects = () => {
    setCurrentProject(null)
  }

  const handleNextStep = () => {
    if (currentProject !== null && currentStep < devOpsProjects[currentProject - 1].steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-yellow-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">DevOps Projects</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {currentProject === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devOpsProjects.map((project) => (
              <Card key={project.id} className="cursor-pointer" onClick={() => handleProjectClick(project.id)}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <Button variant="outline" onClick={handleBackToProjects} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all projects
            </Button>
            <h2 className="text-3xl font-bold mb-2">{devOpsProjects[currentProject - 1].title}</h2>
            <div className="mb-4">
              {devOpsProjects[currentProject - 1].steps.map((step, index) => (
                <div key={index} className="flex items-center mb-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index === currentStep ? 'bg-yellow-500 text-white' : index < currentStep ? 'bg-gray-300 text-gray-600' : 'bg-white border-2 border-gray-300'}`}>
                    {index === currentStep ? <ArrowRight className="h-4 w-4" /> : index < currentStep ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  <p className={`ml-2 ${index === currentStep ? 'font-bold' : ''}`}>{step}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePreviousStep} disabled={currentStep === 0}>
                Previous
              </Button>
              <Button variant="outline" onClick={handleNextStep} disabled={currentStep === devOpsProjects[currentProject - 1].steps.length - 1}>
                Next
              </Button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2023 DevOps Projects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
