#include <react/renderer/components/answersolver/ComponentDescriptors.h>
#include <react/renderer/components/SmartlookAnalytics/ComponentDescriptors.h>
#include <react/renderer/components/rncore/ComponentDescriptors.h>

// ...

std::shared_ptr<CoreComponentsRegistry> MainComponentsRegistry::buildRegistry() {
  auto providerRegistry = CoreComponentsRegistry::sharedProviderRegistry();

  // Custom Fabric Components go here. You can register custom
  // components coming from your App or from 3rd party libraries here.
  //
  // providerRegistry->add(concreteComponentDescriptorProvider<
  //        AocViewerComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<SmartlookSensitiveViewComponentDescriptor>());

  return providerRegistry;
}
